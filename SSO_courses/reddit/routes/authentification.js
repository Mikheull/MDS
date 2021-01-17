var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('reddit'));

router.get('/callback', passport.authenticate('reddit', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;