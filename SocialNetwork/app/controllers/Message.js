const MessageModel = require('../models/messages')
const CommentModel = require('../models/comments')

/**
 * Message
 * @class
 */

class Message {
  constructor (app, connect) {
    this.app = app
    this.MessageModel = connect.model('Message', MessageModel)
    this.CommentModel = connect.model('Comment', CommentModel)

    this.getMessages()
    this.getMessage()
    this.getMessagesComments()
    this.createMessage()
    this.updateMessage()
    this.deleteMessage()
  }

  /**
     * Get all messages
     * @Endpoint : /v1/messages
     * @Method : GET
     */
  getMessages () {
    this.app.get('/v1/messages', (req, res) => {
      try {
        this.MessageModel.find({}, function (err, messages) {
          if (err) {
            console.log(err)
          }
          res.status(200).json(
            {
              data: {
                total: Object.keys(messages).length,
                messages
              }
            }
          )
        }).populate('author_id, discussion_ref')
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
     * Get one message
     * @Endpoint : /v1/messages/{id}
     * @Method : GET
     */
  getMessage () {
    this.app.get('/v1/messages/:id', (req, res) => {
      try {
        this.MessageModel.findById(req.params.id).populate('author_id discussion_ref').then(message => {
          if (message) {
            res.status(200).json(
              {
                data: {
                  message
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
     * Get all comments from a message
     * @Endpoint : /v1/messages/{id}/comments
     * @Method : GET
     */
  getMessagesComments () {
    this.app.get('/v1/messages/:id/comments', (req, res) => {
      try {
        this.MessageModel.findById(req.params.id).populate('author_id, discussion_ref').then(message => {
          if (message) {
            this.CommentModel.find({'ref': req.params.id, 'type': 'group_message'}).populate('author_id').then(comments => {
              res.status(201).json(
                {
                  data: {
                    total: Object.keys(comments).length,
                    comments
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
     * Create a message
     * @Endpoint : /v1/messages/create
     * @Method : POST
     */
  createMessage () {
    this.app.post('/v1/messages/create', (req, res) => {
      try {
        const messageModel = new this.MessageModel(req.body)
                
        messageModel.save().then(message => {
          res.status(201).json(
            {
              data: {
                message
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
     * Edit a message
     * @Endpoint : /v1/messages/{id}/update
     * @Method : PUT
     */
  updateMessage () {
    this.app.put('/v1/messages/:id/update', (req, res) => {
      try {
        this.MessageModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate('author_id, discussion_ref').then(message => {
          if (message) {
            res.status(201).json(
              {
                data: {
                  message
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
     * Delete a message
     * @Endpoint : /v1/messages/{id}/delete
     * @Method : DELETE
     */
  deleteMessage () {
    this.app.delete('/v1/messages/:id/delete', (req, res) => {
      try {
        this.MessageModel.findByIdAndDelete(req.params.id).populate('author_id, discussion_ref').then(message => {
          if (message) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This message has successfully deleted'
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

module.exports = Message
