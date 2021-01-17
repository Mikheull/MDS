var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('dribbble'));

router.get('/callback', passport.authenticate('dribbble', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;