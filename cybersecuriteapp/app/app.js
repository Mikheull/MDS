import express from 'express'
import session from 'express-session'
import cookie from 'cookie'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import config from '../config/server.js'
import jwt from 'jsonwebtoken'
import https from 'https'
import fs from 'fs'


const app = express();
const server = require('http').createServer(app);
const dotenv = require('dotenv').config()

const options = {
    key: fs.readFileSync('../config/key/app/key.pem'),
    cert: fs.readFileSync('../config/key/app/cert.pem')
};

  
import * as Auth from './model/Auth'
import * as User from './model/User'

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: "E€$=vD6€HxP6vg&U33h2LZ96!;3Q4tm>mRµ", saveUninitialized: true, resave: true }))

app.use(async (req, res, next) => {
    req.Auth = Auth;
    req.User = User;
    
    const logged = await Auth.isLogged(req);
    req.logged = logged;

    let user_data = false
    if(logged){
        const usertoken = req.cookies.token;
        if(usertoken){
            jwt.verify(usertoken, 'fHAwxPaZF6wxnZYuxnEF', async (err, verifiedJwt) => {
                if(!err){
                    user_data = await User.getAccountData(verifiedJwt.user._id)
                }
            })
        }
    }
    
    req.user_data = user_data;
    next();
});


import router from './routes/routes'
app.use('/', router);

app.listen(config.ports.app.port, () => {
    console.log(`Listening to requests on ${config.ports.app.base_url}`);
});

https.createServer(options, app).listen(config.ports.app.sslport);