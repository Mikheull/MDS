var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('google', { scope : ['profile','email'] } ));

router.get('/callback',
    passport.authenticate('google', {
        successRedirect : '/',
        failureRedirect : '/login'
    })
);


module.exports = router;