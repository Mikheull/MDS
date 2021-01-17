const pm2 = require('pm2');
const fs = require('fs');
const csv = require('csv-parser')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const log = require('log-to-file');

const config = require("../config");
const utils = require("../functions");
// const SiretsModel = require('../models/sirets')
const { parse } = require('path');


/**
 * Mongoose connection
 */
const host = process.env.NOSQL_URL
const connect = mongoose.createConnection(host, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
const db = connect.collection(process.env.NOSQL_TABLE);
// const db = connect.model(process.env.NOSQL_TABLE, SiretsModel)


/**
 * Selection d'une tâche
 */ 
if(!process.argv[2] ) {
    log(`File identifier is missing !`, 'logs/workers.log');
    return false;
}

const identifier = process.argv[2];
const taskPos = process.argv[3];
const taskImported = process.argv[4];
const worker = process.argv[5];


/**
 * Parser
 */
const results = [];
if(fs.existsSync(`${config.path.import_output_dir}output-${identifier}.csv`)){
    fs.createReadStream(`${config.path.import_output_dir}output-${identifier}.csv`)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {

         // Get the collection and bulk api artefacts
        bulkUpdateOps = [];  
        let imp_start = new Date();
        let imp_hrstart = process.hrtime();  


        if(config.workers.mode == 'brut'){
            // Version brute
            db.insertMany(results, function(err,result) {
                process.send({
                    type: 'worker:ended',
                    data: {
                        identifier      : parseInt(identifier),
                        worker          : parseInt(worker),
                        taskPos         : parseInt(taskPos),
                        taskImported    : parseInt(bulkUpdateOps.length),
                    }
                })
            })

        }else if(config.workers.mode == 'bulk'){
            // Version Bulk
            results.forEach(function(doc) {
                bulkUpdateOps.push({ "insertOne": { "document": doc } });

                if (bulkUpdateOps.length === config.workers.bulk_limit) {
                    db.bulkWrite(bulkUpdateOps).then(function(r) {});
                    bulkUpdateOps = [];
                }
            })

            if (bulkUpdateOps.length > 0) {
                db.bulkWrite(bulkUpdateOps).then(function(r) {});
            }
        }

        setTimeout(function (argument) {
            let imp_end 	= new Date() - imp_start,
              imp_hrend	= process.hrtime(imp_hrstart);
          
            log(`${bulkUpdateOps.length} lines imported for file ${identifier} with worker ${worker} in ${imp_hrend[0]}s (${imp_end}ms) !`, 'logs/workers.log');
        }, 1);

        if(config.workers.mode == 'bulk'){
            process.send({
                type: 'worker:ended',
                data: {
                    identifier      : parseInt(identifier),
                    worker          : parseInt(worker),
                    taskPos         : parseInt(taskPos),
                    taskImported    : parseInt(bulkUpdateOps.length),
                }
            })
        }


    });
}
