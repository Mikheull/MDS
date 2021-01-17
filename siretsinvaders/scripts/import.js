const fs = require('fs')
const csvSplitStream = require('csv-split-stream');
const log = require('log-to-file');

const config = require("../config");
const utils = require("../functions");


/**
 * Create dirs and files
 */

const dirs = ['import_output_dir', 'logs_dir', 'execution_dir']

dirs.forEach(function (name) {
	if (!fs.existsSync(config.path[name])) {
		fs.mkdirSync(config.path[name])
		log(`The directory ${config.path[name]} was created`, 'logs/import.log');
	}
});



/**
 * Check if dataset file exist
 */

if (!fs.existsSync(config.path.import_file)) {
	log(`The dataset file ${config.path.import_file} was not found`, 'logs/import.log');
	return false;
}


/**
 * Split file into multiple small files (-50Mo)
 */

let start = new Date();
let hrstart = process.hrtime();

csvSplitStream.split(
    fs.createReadStream(config.path.import_file),{
        lineLimit: config.split.lineLimit
    },
    (index) => fs.createWriteStream(`${config.path.import_output_dir}/output-${index + 1}.csv`)
)
.then(csvSplitResponse => {
	utils.writeHistory(csvSplitResponse);
	
	setTimeout(function (argument) {
		let end 	= new Date() - start,
			hrend	= process.hrtime(hrstart);
	
		log(`Import files in ${hrend[0]}s (${end}ms)`, 'execution/import.log');
	}, 1);

	log(`All files are splitted in ${csvSplitResponse.totalChunks} parts`, 'logs/import.log');

}).catch(csvSplitError => {
	log(`An error was occured on CsvSplitStream`, 'logs/import.log');
});
