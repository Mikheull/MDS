const pm2 = require('pm2');
const fs = require('fs')
const log = require('log-to-file');

const config = require("../config");
const utils = require("../functions");


pm2.connect(function(err) {
    if (err) {
      process.exit(2);
    }

    pm2.list((err, list) => {
        list.map(item => {
            pm2.delete(item.pm_id);
        })
    });
      
});
