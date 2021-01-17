var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/',
    passport.authenticate('linkedin', { state: 'state'  }),
    function(req, res){
  
    }
);



router.get('/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;