const express = require("express");
const app = express();
const server = require('http').createServer(app);
const dotenv = require('dotenv').config()
const passport = require('passport');
const TwitchStrategy = require('passport-twitch').Strategy;

// Vues
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// Google config
const config = require('./oauth.js');
passport.use('twitch', new TwitchStrategy({
    clientID        : config.twitch.clientID,
    clientSecret    : config.twitch.clientSecret,
    callbackURL     : config.twitch.callbackURL,
    scope: "user_read"
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