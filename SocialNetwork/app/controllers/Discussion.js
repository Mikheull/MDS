const DiscussionModel = require('../models/discussions')
const MessageModel = require('../models/messages')

/**
 * Discussion
 * @class
 */

class Discussion {
  constructor (app, connect) {
    this.app = app
    this.DiscussionModel = connect.model('Discussion', DiscussionModel)
    this.MessageModel = connect.model('Message', MessageModel)

    this.getDiscussions()
    this.getDiscussion()
    this.getDiscussionMessages()
    this.createDiscussion()
    this.updateDiscussion()
    this.deleteDiscussion()
  }

  /**
     * Get all discussions
     * @Endpoint : /v1/discussions
     * @Method : GET
     */
  getDiscussions () {
    this.app.get('/v1/discussions', (req, res) => {
      try {
        this.DiscussionModel.find({}, function (err, discussions) {
          if (err) {
            console.log(err)
          }
          res.status(200).json(
            {
              data: {
                total: Object.keys(discussions).length,
                discussions
              }
            }
          )
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
     * Get one discussion
     * @Endpoint : /v1/discussions/{id}
     * @Method : GET
     */
  getDiscussion () {
    this.app.get('/v1/discussions/:id', (req, res) => {
      try {
        this.DiscussionModel.findById(req.params.id).then(discussion => {
          if (discussion) {
            res.status(200).json(
              {
                data: {
                  discussion
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
     * Get all messages from a discussion
     * @Endpoint : /v1/discussions/{id}/messages
     * @Method : GET
     */
  getDiscussionMessages () {
    this.app.get('/v1/discussions/:id/messages', (req, res) => {
      try {
        this.DiscussionModel.findById(req.params.id).then(discussion => {
          if (discussion) {
            this.MessageModel.find({'discussion_ref': req.params.id}).populate('author_id, discussion_ref').then(messages => {
              res.status(200).json(
                {
                  data: {
                    total: Object.keys(messages).length,
                    messages
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
     * Create a discussion
     * @Endpoint : /v1/discussions/create
     * @Method : POST
     */
  createDiscussion () {
    this.app.post('/v1/discussions/create', (req, res) => {
      try {
        const discussionModel = new this.DiscussionModel(req.body)
                
        if (req.body.type && (req.body.type === 'group' || req.body.type === 'event')) {
          discussionModel.save().then(discussion => {
            res.status(201).json(
              {
                data: {
                  discussion
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
                message: 'ID not found'
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
     * Edit a discussion
     * @Endpoint : /v1/discussions/{id}/update
     * @Method : PUT
     */
  updateDiscussion () {
    this.app.put('/v1/discussions/:id/update', (req, res) => {
      try {
        this.DiscussionModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(discussion => {
          if (discussion) {
            res.status(201).json(
              {
                data: {
                  discussion
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
     * Delete a discussion
     * @Endpoint : /v1/discussions/{id}/delete
     * @Method : DELETE
     */
  deleteDiscussion () {
    this.app.delete('/v1/discussions/:id/delete', (req, res) => {
      try {
        this.DiscussionModel.findByIdAndDelete(req.params.id).then(discussion => {
          if (discussion) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This discussion has successfully deleted'
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

module.exports = Discussion
