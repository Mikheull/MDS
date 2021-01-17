var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('slack'));

router.get('/callback', passport.authenticate('slack', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;