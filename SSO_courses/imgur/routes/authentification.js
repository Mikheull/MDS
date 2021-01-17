var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('imgur'));

router.get('/callback', passport.authenticate('imgur', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;