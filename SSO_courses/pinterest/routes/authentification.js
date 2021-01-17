var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('pinterest'));

router.get('/callback', passport.authenticate('pinterest', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;