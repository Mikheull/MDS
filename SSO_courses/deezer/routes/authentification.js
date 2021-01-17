var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('deezer'));

router.get('/callback', passport.authenticate('deezer', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;