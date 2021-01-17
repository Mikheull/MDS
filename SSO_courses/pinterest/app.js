const express = require("express");
const app = express();
const server = require('http').createServer(app);
const dotenv = require('dotenv').config()
const passport = require('passport');
const PinterestStrategy = require('passport-pinterest').Strategy;

// Vues
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// Google config
const config = require('./oauth.js');
passport.use('pinterest', new PinterestStrategy({
    clientID        : config.pinterest.clientID,
    clientSecret    : config.pinterest.clientSecret,
    callbackURL     : config.pinterest.callbackURL,
    scope: ['read_public', 'read_relationships'],
    },

    function(access_token, refresh_token, profile, done) {
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