var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('twitch'));

router.get('/callback', passport.authenticate('twitch', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;