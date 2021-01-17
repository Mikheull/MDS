const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
// const expect = require('chai').expect

const routes = require('./routes')

/**
 * Server
 * @Class
 */
class Server {
  constructor () {
    this.app = express()
  }

  /**
     * DataBase connect
     * @return {Object} connect
     */
  dbConnect () {
    const host = `mongodb://${process.env.NOSQL_HOST}/${process.env.NOSQL_TABLE}`

    mongoose.set('useCreateIndex', true)
    const connect = mongoose.createConnection(host, { useNewUrlParser: true, useUnifiedTopology: true })

    connect.on('error', (err) => {
      setTimeout(() => {
        console.error(`[ERROR], api dbConnect() -> ${err}`)
        this.connect = this.dbConnect(host)
      }, 5000)
    }) 

    connect.on('disconnected', () => {
      setTimeout(() => {
        console.log(`[DISCONNECTED], api dbConnect() -> mongodb disconnected`)
        this.connect = this.dbConnect(host)
      }, 5000)
    }) 

    process.on('SIGINT', () => {
      connect.close(() => {
        console.log('[API END PROCESS] api dbConnect() -> close mongodb connection')
        process.exit(0)
      })
    }) 

    return connect
  }

  /**
     * Middleware
     */
  middleware () {
    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({'extended': true}))
  }

  /**
     * Routes
     */
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

    new routes.User(this.app, this.connect)
    new routes.Event(this.app, this.connect)
    new routes.Group(this.app, this.connect)
    new routes.Invitation(this.app, this.connect)
    new routes.Discussion(this.app, this.connect)
    new routes.Message(this.app, this.connect)
    new routes.Comment(this.app, this.connect)
    new routes.Album(this.app, this.connect)
    new routes.Poll(this.app, this.connect)
    new routes.Shopping(this.app, this.connect)
    new routes.Ticket(this.app, this.connect)

    this.app.use((req, res) => {
      res.status(404).json({
        code: 404,
        message: 'not found'
      })
    })
  }

  /**
     * Run
     */
  run () {
    try {
      this.connect = this.dbConnect()
      this.dbConnect()
      this.middleware()
      this.routes()
      this.app.listen(3030)
      console.log('listen on http://localhost:3030')
    } catch (err) {
      console.log(`[ERROR] SERVER -> ${err}`)
    }
  }
}

module.exports = Server
