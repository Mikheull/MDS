const express = require("express");
const app = express();
const server = require('http').createServer(app);
const dotenv = require('dotenv').config()
const passport = require('passport');
const DropboxOAuth2Strategy = require('passport-dropbox-oauth2').Strategy;

// Vues
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// Google config
const config = require('./oauth.js');
passport.use('dropbox', new DropboxOAuth2Strategy({
    apiVersion: '2',
    clientID     : config.dropbox.clientID,
    clientSecret  : config.dropbox.clientSecret,
    callbackURL     : config.dropbox.callbackURL,
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