const express = require("express");
const app = express();
const server = require('http').createServer(app);
const dotenv = require('dotenv').config()
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

// Vues
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// Google config
const config = require('./oauth.js');
passport.use('spotify', new SpotifyStrategy({
    clientID        : config.spotify.clientID,
    clientSecret    : config.spotify.clientSecret,
    callbackURL     : config.spotify.callbackURL,
    },

    function(access_token, refresh_token, expires_in, profile, done) {
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