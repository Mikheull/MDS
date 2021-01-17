var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('dropbox'));

router.get('/callback', passport.authenticate('dropbox', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;