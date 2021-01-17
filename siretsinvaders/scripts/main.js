const pm2 = require('pm2');
const fs = require('fs')
const log = require('log-to-file');

const config = require("../config");
const utils = require("../functions");
const { exit } = require('process');
let start = new Date();
let hrstart = process.hrtime();


pm2.connect(function(err) {
    if (err) {
      process.exit(2);
    }

    let history = fs.readFileSync(config.path.history_file);
    history = JSON.parse(history);
    const per_worker = Math.round(history.length / config.workers.core);
    

    let findTask = [];
    for(let i = 1; i <= config.workers.core; i++){
        findTask = utils.findTask(i, per_worker);

        if(findTask && findTask !== []){
          const pm2Config = {
              script              : config.worker.script,
              exec_mode           : config.worker.exec_mode,
              watch               : config.worker.watch,
              max_memory_restart  : config.worker.max_memory_restart,
              args                : ""+findTask.id+" "+findTask.position+" "+findTask.imported+" "+i+"",
              name                : String(i),
              instances           : 1
          };
          pm2.start(pm2Config, (err, apps) => {
              if (err) throw err
          });
        }else{
          log(`All datas are imported !`, 'logs/workers.log');
          // process.exit()
        }
        findTask = []
        
    }
    
    
    pm2.launchBus(function(err, bus) {
        bus.on('worker:ended', function(packet) {
            const pmID = packet.process.pm_id
            const worker = packet.data.worker
            const next = pmID
            
            utils.closeTask(pmID, worker);
            pm2.delete(pmID);

            setTimeout(() => {
                anotherTask = utils.findTask(worker, per_worker);
                
                if(anotherTask && anotherTask !== []){
                  const pm2Config = {
                      script              : config.worker.script,
                      exec_mode           : config.worker.exec_mode,
                      watch               : config.worker.watch,
                      max_memory_restart  : config.worker.max_memory_restart,
                      name                : String(next),
                      args                : ""+anotherTask.id+" "+anotherTask.position+" "+anotherTask.imported+" "+next+"",
                      instances           : 1
                  };
                  pm2.start(pm2Config, (err, apps) => {
                      if (err) throw err
                  });
                }else{
                  checkWorkersExist(start, hrstart);
    
                  function checkWorkersExist(start, hrstart) { 
                    pm2.list((err, list) => {
                        if(list.length > 0){
                            setTimeout(() => {
                              checkWorkersExist(start, hrstart)
                            }, config.delay.between_check_end);
                        }else{
                            let end 	= new Date() - start,
                              hrend	= process.hrtime(hrstart);
                          
                            console.log(`Import all datas in ${hrend[0]}s (${end}ms)`);
                            log(`Import all datas in ${hrend[0]}s (${end}ms)`, 'execution/import.log');
                            
                            log(`All datas are imported !`, 'logs/workers.log');
                            process.exit();
                        }
                    });
                  }
                }
            }, config.delay.between_workers);
            
        });
   });
      
});