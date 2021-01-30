import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import passport from 'passport'
import https from 'https'
import fs from 'fs'

const dotenv = require('dotenv').config()
import config from '../config/server.js'

const options = {
    key: fs.readFileSync('../config/key/auth_api/key.pem'),
    cert: fs.readFileSync('../config/key/auth_api/cert.pem')
};


mongoose.connect(`mongodb+srv://${process.env.NOSQL_USER}:${process.env.NOSQL_PWD}@${process.env.NOSQL_HOST}/${process.env.NOSQL_TABLE}`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;


import './auth/auth'

import routes from './routes/routes'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({ error: err });
});

app.listen(config.ports.auth_api.port, () => {
    console.log(`Listening to requests on ${config.ports.auth_api.base_url}`);
});

https.createServer(options, app).listen(config.ports.auth_api.sslport);
