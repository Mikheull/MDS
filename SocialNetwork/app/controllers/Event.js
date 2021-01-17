const EventModel = require('../models/events')

/**
 * Event
 * @class
 */

class Event {
  constructor (app, connect) {
    this.app = app
    this.EventModel = connect.model('Event', EventModel)

    this.getEvents()
    this.getEvent()
    this.createEvent()
    this.joinEvent()
    this.leaveEvent()
    this.updateEvent()
    this.deleteEvent()
  }

  /**
     * Get all events
     * @Endpoint : /v1/events
     * @Method : GET
     */
  getEvents () {
    this.app.get('/v1/events', (req, res) => {
      try {
        this.EventModel.find({}, function (err, events) {
          if (err) {
            console.log(err)
          }
          res.status(200).json(
            {
              data: {
                total: Object.keys(events).length,
                events
              }
            }
          )
        }).populate('managers, members')
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }
    
  /**
     * Get one event
     * @Endpoint : /v1/events/{id}
     * @Method : GET
     */
  getEvent () {
    this.app.get('/v1/events/:id', (req, res) => {
      try {
        this.EventModel.findById(req.params.id).populate('managers, members').then(event => {
          if (event) {
            res.status(200).json(
              {
                data: {
                  event
                }
              }
            )
          } else {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          }
        }).catch(err => {
          if (err) {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          } 
        })
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }
    
  /**
     * Create an event
     * @Endpoint : /v1/events/create
     * @Method : POST
     */
  createEvent () {
    this.app.post('/v1/events/create', (req, res) => {
      try {
        const eventModel = new this.EventModel(req.body)
                
        if (req.body.managers && req.body.managers[0]) {
          eventModel.save().then(event => {
            res.status(201).json(
              {
                data: {
                  event
                }
              }
            )
          }).catch(err => {
            if (err) {
              res.status(400).json(
                {
                  error: {
                    code: 400,
                    message: 'An error has occurred'
                  }
                }
              )  
            } 
          })
        } else {
          res.status(400).json(
            { 
              error: {
                code: 400,
                message: 'Owner is not defined'
              } 
            }
          ) 
        }
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }

  /**
     * Join an event
     * @Endpoint : /v1/events/{id}/join
     * @Method : PUT
     */
  joinEvent () {
    this.app.put('/v1/events/:id/join', (req, res) => {
      try {
        this.EventModel.findById(req.params.id).populate('managers, members').then(event => {
          const _managers = event.managers
          const _members = event.members
          const _userId = (req.body.user_id) ? req.body.user_id : false
          const _role = (req.body.manager) ? 'manager' : 'member'
                    
          if (_managers.includes(_userId) || _members.includes(_userId)) {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'User already in this event'
                }
              }
            ) 
          } else {
            let data
            if (_role === 'member') {
              _members.push(_userId)
              data = {members: _members}
            } else if (_role === 'manager') {
              _managers.push(_userId)
              data = {managers: _managers}
            }
            this.EventModel.findByIdAndUpdate(req.params.id, data, {new: true}).populate('managers, members').then(event => {
              res.status(201).json(
                {
                  data: {
                    event
                  }
                }
              )
            }).catch(err => {
              if (err) {
                res.status(400).json(
                  {
                    error: {
                      code: 400,
                      message: 'ID not found'
                    }
                  }
                )  
              } 
            })
          }
        })
          .catch(err => {
            if (err) {
              res.status(400).json(
                {
                  error: {
                    code: 400,
                    message: 'ID not found'
                  }
                }
              )  
            }  
          })
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }

  /**
     * Leave an event
     * @Endpoint : /v1/events/{id}/leave
     * @Method : PUT
     */
  leaveEvent () {
    this.app.put('/v1/events/:id/leave', (req, res) => {
      try {
        this.EventModel.findById(req.params.id).populate('managers, members').then(event => {
          const _managers = event.managers
          const _members = event.members
          const _userId = (req.body.user_id) ? req.body.user_id : false
          const _role = (req.body.manager) ? 'manager' : 'member'
          let data
                    
          if (_role === 'member') {
            if (_members.includes(_userId)) {
              _members.splice(_members.indexOf(_userId), 1)
              data = {members: _members}
    
              this.EventModel.findByIdAndUpdate(req.params.id, data, {new: true}).populate('managers, members').then(event => {
                res.status(201).json(
                  {
                    data: {
                      event
                    }
                  }
                )
              }).catch(err => {
                if (err) {
                  res.status(400).json(
                    {
                      error: {
                        code: 400,
                        message: 'ID not found'
                      }
                    }
                  )  
                }
              })
            } else {
              res.status(400).json(
                {
                  error: {
                    code: 400,
                    message: 'User not in this event'
                  }
                }
              ) 
            }
          } else if (_role === 'manager') {
            if (_managers.includes(_userId)) {
              _managers.splice(_managers.indexOf(_userId), 1)
              data = {managers: _managers}
              this.EventModel.findByIdAndUpdate(req.params.id, data, {new: true}).populate('managers, members').then(event => {
                res.status(201).json(
                  {
                    data: {
                      event
                    }
                  }
                )
              }).catch(err => {
                if (err) {
                  res.status(400).json(
                    {
                      error: {
                        code: 400,
                        message: 'ID not found'
                      }
                    }
                  )  
                }
              })
            } else {
              res.status(400).json(
                {
                  error: {
                    code: 400,
                    message: 'User not in this event'
                  }
                }
              ) 
            }
          }
        })
          .catch(err => {
            if (err) {
              res.status(400).json(
                {
                  error: {
                    code: 400,
                    message: 'ID not found'
                  }
                }
              )  
            }
          })
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }
    
  /**
     * Edit an event
     * @Endpoint : /v1/events/{id}/update
     * @Method : PUT
     */
  updateEvent () {
    this.app.put('/v1/events/:id/update', (req, res) => {
      try {
        this.EventModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate('managers, members').then(event => {
          if (event) {
            res.status(201).json(
              {
                data: {
                  event
                }
              }
            )
          } else {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          }
        }).catch(err => {
          if (err) {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          }
        })
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }

  /**
     * Delete an event
     * @Endpoint : /v1/events/{id}/delete
     * @Method : DELETE
     */
  deleteEvent () {
    this.app.delete('/v1/events/:id/delete', (req, res) => {
      try {
        this.EventModel.findByIdAndDelete(req.params.id).populate('managers, members').then(event => {
          if (event) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This evenement has successfully deleted'
                }
              }
            )
          } else {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            ) 
          }
        }).catch(err => {
          if (err) {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          }
        })
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }
}

module.exports = Event
