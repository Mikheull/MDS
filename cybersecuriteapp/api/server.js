import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import https from 'https'
import fs from 'fs'

const dotenv = require('dotenv').config()
import config from '../config/server.js'
import configPassport from './passport';
configPassport();

/**
 * Routes
 */
const Users = require('./controllers/Users')
const Products = require('./controllers/Products')


class Server {
	constructor(){
		this.app = express()
	}

	dbConnect(){
		const host = `mongodb+srv://${process.env.NOSQL_USER}:${process.env.NOSQL_PWD}@${process.env.NOSQL_HOST}/${process.env.NOSQL_TABLE}`
		mongoose.set('useCreateIndex', true)
		const connect = mongoose.createConnection(host, { useNewUrlParser: true, useUnifiedTopology: true })


		connect.on('error', (err) => {
			setTimeout(() => {
				// console.error(`[ERROR], api dbConnect() -> ${err}`)
				this.connect = this.dbConnect(host)
			}, 5000)
		})

		connect.on('disconnected', (err) => {
			setTimeout(() => {
				// console.log(`[DISCONNECTED], api dbConnect() -> mongodb disconnected`)
				this.connect = this.dbConnect(host)
			}, 5000)
		})

		process.on('SIGINT', () => {
			connect.close(() => {
				// console.log(`[API END PROCESS] api dbConnect() -> close mongodb connection`)
				process.exit(0)
			})
		}) 

		return connect
	}

	middleware () {
		this.app.use(cors())
		this.app.use(bodyParser.json())
		this.app.use(bodyParser.urlencoded({'extended': true}))
	}

	routes () {
		this.app.use((req, res, next) => {
			if (req.headers['x-access-token']) {
			  if (req.headers['x-access-token'] !== process.env.ACCESS_TOKEN) {
				res.status(401).json({
				  code: 401,
				  message: 'Failed to authenticate token'
				})
			  } else {
				next()
			  }
			} else {
			  res.status(401).json({
				code: 401,
				message: 'No token provided'
			  })
			}
		})

		new Users(this.app, this.connect)
		new Products(this.app, this.connect)
	
		this.app.use((req, res) => {
			res.status(404).json(
				{
					error: {
						code: 404,
						message: 'Page not found'
					}
				}
			) 
		})
	}

	run () {
		try {
			const options = {
				key: fs.readFileSync('../config/key/api/key.pem'),
				cert: fs.readFileSync('../config/key/api/cert.pem')
			};

			this.connect = this.dbConnect()
			this.dbConnect()
			this.middleware()
			this.routes()

			this.app.listen(config.ports.api.port, () => {
				console.log(`Listening to requests on ${config.ports.api.base_url}`);
			});
			
			https.createServer(options, this.app).listen(config.ports.api.sslport);
		} catch (err) {
		  	console.log(`[ERROR] SERVER -> ${err}`)
		}
	}
}

export default Server;
