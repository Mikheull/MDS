const fs = require('fs')
const config = require("./config");
const pm2 = require('pm2');


/**
 * Create History tasks file
 * @param {*} csvResponse 
 */
const writeHistory = (csvResponse) => {
    if(csvResponse){
        const history = []

        for (let i = 0; i <= csvResponse.totalChunks; i ++) {
            history.push({
                id: i + 1,
                position: 0,
                imported: 0,
                worker: 0
            })
        }
    
        fs.writeFileSync(config.path.history_file, JSON.stringify(history));
    }else{
        return false
    }
}

/**
 * Find an available task
 */
const findTask = (worker, per_worker) => {
    let history = fs.readFileSync(config.path.history_file);
    history = JSON.parse(history);

    let i = 0;
    const found = history.filter(function(item){
        if (item.imported == 0 && i == 0) {
            if(item.id > (worker == 1 ? 0 : per_worker * (worker - 1)) && item.id < per_worker * (worker + 1) ){
                item.imported   = 1,
                item.worker     = worker
                i++;
                return true;
            }
            return false;
            
        }
        return false;
    });

    fs.writeFileSync(config.path.history_file, JSON.stringify(history));
    
    if(found.length > 0){console.log(found);}
    return (found.length > 0) ? found[0] : null;
}

/**
 * Close an ended task
 */
const closeTask = (id, worker) => {
    let history = fs.readFileSync(config.path.history_file);
    history = JSON.parse(history);

    history.filter(function(item){
        if (item.id == id) {
            item.imported   = 3,
            item.worker     = worker
            item.position   = config.split.lineLimit
            return true;
        }
        return false;
    });

    fs.writeFileSync(config.path.history_file, JSON.stringify(history));
}

exports.writeHistory = writeHistory;
exports.findTask = findTask;
exports.closeTask = closeTask;
  