const express = require("express");
const app = express();
const server = require('http').createServer(app);
const session = require('express-session');
const dotenv = require('dotenv').config()
const passport = require('passport');
const TrelloStrategy = require('passport-trello').Strategy;

app.use(session({
    secret: "E€$=vD6€HxP6vg&U33h2LZ96!;3Q4tm>mRµ",
    saveUninitialized: true,
    resave: true
}))


// Vues
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// Google config
const config = require('./oauth.js');
passport.use('trello', new TrelloStrategy({
    consumerKey         : config.trello.clientID,
    consumerSecret      : config.trello.clientSecret,
    callbackURL         : config.trello.callbackURL,
    passReqToCallback: true,
    },

    function(req, token, tokenSecret, profile, done) {
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