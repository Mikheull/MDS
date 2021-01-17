var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('github', { scope : ['profile','email'] } ));

router.get('/callback',
    passport.authenticate('github', {
        successRedirect : '/',
        failureRedirect : '/login'
    })
);


module.exports = router;