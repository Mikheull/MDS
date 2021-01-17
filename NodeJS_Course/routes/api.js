const router = require('express').Router();
const getJSON = require('get-json')

const Stations = require('../model/Stations.js');
const stations_obj = new Stations();


/* GET api page. */
router.get('/', function(req, res) {
	res.render('api/index');
});



/* POST api page. */
router.post('/', function(req, res) {
	let station_code = req.body.station_code;
	res.redirect('/api/' + station_code)
});



router.get('/:station_code?', function (req, res) {
	let station_code = req.params.station_code;
	let regex_check;

	if (station_code.match(/^[0-9]{1,6}$/)) {
		regex_check = true;
	}else{
		regex_check = false;
	}

	getJSON('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&facet=station_code&refine.station_code=' + station_code, function(error, response){
		res.render('api/item/index', {
			regex_check: regex_check,
			station_code: station_code,
			response: response
		});
	})
    
	
})

module.exports = router;
