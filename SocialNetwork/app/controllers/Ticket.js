const EventModel = require('../models/events')
const TicketTypeModel = require('../models/tickets_type')
const TicketBuyModel = require('../models/tickets_buyed')

/**
 * Ticket
 * @class
 */

class Ticket {
  constructor (app, connect) {
    this.app = app
    this.EventModel = connect.model('Event', EventModel)
    this.TicketTypeModel = connect.model('TicketType', TicketTypeModel)
    this.TicketBuyModel = connect.model('TicketBuy', TicketBuyModel)

    this.enableTickets()
    this.disableTicket()
    this.createTicket()
    this.getEventTicketTypes()
    this.getEventTicketBuy()
    this.buyTicket()
    this.unbuyTicket()
  }

  /**
     * Enable the ticker shop in an event
     * @Endpoint : /v1/tickets/enable
     * @Method : POST
     */
  enableTickets () {
    this.app.post('/v1/tickets/enable', (req, res) => {
      try {
        this.EventModel.findByIdAndUpdate(req.body.event_id, {'tickets': true}, {new: true}).populate('managers, members').then(event => {
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
     * Disable the ticket shop from an event
     * @Endpoint : /v1/tickets/disable
     * @Method : POST
     */
  disableTicket () {
    this.app.post('/v1/tickets/disable', (req, res) => {
      try {
        this.EventModel.findByIdAndUpdate(req.body.event_id, {'tickets': false}, {new: true}).populate('managers, members').then(event => {
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
     * Create a ticket
     * @Endpoint : /v1/tickets/create
     * @Method : POST
     */
  createTicket () {
    this.app.post('/v1/tickets/create', (req, res) => {
      try {
        const ticketTypeModel = new this.TicketTypeModel(req.body)
                
        this.EventModel.findById(req.body.event_id, function (err, event) {
          if (err) {
            console.log(err)
          }
          if (event) {
            ticketTypeModel.save().then(ticket => {
              res.status(201).json(
                {
                  data: {
                    ticket
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
                  message: 'Event does not exist'
                } 
              }
            ) 
          }
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
     * Get all tickets type from an event
     * @Endpoint : /v1/tickets/items
     * @Method : GET
     */
  getEventTicketTypes () {
    this.app.get('/v1/tickets/types', (req, res) => {
      try {
        this.EventModel.findById(req.body.event_id).populate('managers, members').then(event => {
          if (event) {
            this.TicketTypeModel.find({'event_id': req.body.event_id}).then(ticketTypes => {
              res.status(200).json(
                {
                  data: {
                    total: Object.keys(ticketTypes).length,
                    ticketTypes
                  }
                }
              )
            })
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
     * Get all buyed tickets from an event
     * @Endpoint : /v1/tickets/items/{id}/buyed
     * @Method : GET
     */
  getEventTicketBuy () {
    this.app.get('/v1/tickets/items/:id/buyed', (req, res) => {
      try {
        this.EventModel.findById(req.body.event_id).populate('managers, members').then(event => {
          if (event) {
            this.TicketTypeModel.findById(req.params.id).populate('event_id').then(ticket => {
              if (ticket) {
                this.TicketBuyModel.find({'ticket_id': req.params.id, 'enable': true}).populate('event_id, ticket_id, user_id').then(tickets => {
                  res.status(200).json(
                    {
                      data: {
                        total: Object.keys(tickets).length,
                        tickets
                      }
                    }
                  )
                })
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
     * Buy a ticket
     * @Endpoint : /v1/tickets/{id}/buy
     * @Method : POST
     */
  buyTicket () {
    this.app.post('/v1/tickets/:id/buy', (req, res) => {
      try {
        const ticketBuyModel = new this.TicketBuyModel(req.body)
                
        this.TicketBuyModel.find({'event_id': req.body.event_id, 'ticket_id': req.body.ticket_id, 'user_id': req.body.user_id, 'enable': true}, function (err, ticket) {
          if (err) {
            console.log(err)
          }
          if (ticket && ticket.length > 0) {
            res.status(400).json(
              { 
                error: {
                  code: 400,
                  message: 'This user already has a ticket for this event'
                } 
              }
            )
          } else {
            ticketBuyModel.save().then(ticket => {
              res.status(201).json(
                {
                  data: {
                    ticket
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
          }
        }).populate('event_id, user_id')
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
     * Unbuy a ticket
     * @Endpoint : /v1/tickets/{id}/buy
     * @Method : POST
     */
  unbuyTicket () {
    this.app.post('/v1/tickets/:id/unbuy', (req, res) => {
      try {
        this.TicketBuyModel.findOneAndUpdate({'event_id': req.body.event_id, 'ticket_id': req.body.ticket_id, 'user_id': req.body.user_id, 'enable': true}, {'enable': false}, {new: true}).populate('event_id, user_id').then(ticket => {
          if (ticket) {
            res.status(201).json(
              {
                data: {
                  ticket
                }
              }
            )
          } else {
            res.status(400).json(
              { 
                error: {
                  code: 400,
                  message: 'This user dont have any ticket for this event'
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

module.exports = Ticket
