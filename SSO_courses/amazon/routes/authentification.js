var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('amazon'));

router.get('/callback', passport.authenticate('amazon', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;