const express = require("express");
const app = express();
const server = require('http').createServer(app);
const dotenv = require('dotenv').config()
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

// Vues
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// Google config
const config = require('./oauth.js');
passport.use(new LinkedInStrategy({
    clientID        : config.linkedin.clientID,
    clientSecret    : config.linkedin.clientSecret,
    callbackURL     : config.linkedin.callbackURL,
    scope: ['r_emailaddress', 'r_basicprofile'],
    },

    function(accessToken, refreshToken, profile, done) {
        process.nextTick(function() {
            return done(JSON.stringify(profile));
        });
    }
));


// Router
const routes = require('./routes/routes');
app.use('/', routes);


server.listen(3030, () => {
    console.log(`Listening to requests on http://localhost:3030`);
});