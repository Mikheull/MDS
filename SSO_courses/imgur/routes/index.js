const router = require('express').Router();


/* GET home page. */
router.get('/', async function(req, res, next) {
	res.send('Bienvenue sur l\'index, allez sur l\'url <a href="/login">/login</a>')
});

module.exports = router;
