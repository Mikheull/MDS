const express = require("express");
const app = express();
const server = require('http').createServer(app);
const bodyParser = require("body-parser");
const io = require('socket.io')(server);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    req.io = io;
    next();
});

// Router
const routes = require('./routes/routes');
app.use('/', routes);



io.sockets.on('connection', function (socket) {

    console.log('connecté');

    socket.on('test', function(toto)  {
        console.log(toto);
        console.log('test');
    });

});









server.listen(3000, () => {
    console.log(`Listening to requests on http://localhost:3000`);
});