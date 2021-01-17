var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('uber'));

router.get('/callback', passport.authenticate('uber', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;