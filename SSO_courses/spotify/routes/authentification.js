var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('spotify'), function(req, res) {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
});
  

router.get(
    '/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    }
  );
  


module.exports = router;