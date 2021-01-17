const CommentModel = require('../models/comments')

/**
 * Comment
 * @class
 */

class Comment {
  constructor (app, connect) {
    this.app = app
    this.CommentModel = connect.model('Comment', CommentModel)

    this.getComments()
    this.getComment()
    this.createComment()
    this.updateComment()
    this.deleteComment()
  }

  /**
     * Get all comments
     * @Endpoint : /v1/comments
     * @Method : GET
     */
  getComments () {
    this.app.get('/v1/comments', (req, res) => {
      try {
        this.CommentModel.find({}, function (err, comments) {
          if (err) {
            console.log(err)
          }
          res.status(200).json(
            {
              data: {
                total: Object.keys(comments).length,
                comments
              }
            }
          )
        }).populate('author_id')
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
     * Get one comment
     * @Endpoint : /v1/comments/{id}
     * @Method : GET
     */
  getComment () {
    this.app.get('/v1/comments/:id', (req, res) => {
      try {
        this.CommentModel.findById(req.params.id).populate('author_id').then(comment => {
          if (comment) {
            res.status(200).json(
              {
                data: {
                  comment
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
     * Create a comment
     * @Endpoint : /v1/comments/create
     * @Method : POST
     */
  createComment () {
    this.app.post('/v1/comments/create', (req, res) => {
      try {
        const commentModel = new this.CommentModel(req.body)
                
        commentModel.save().then(comment => {
          res.status(201).json(
            {
              data: {
                comment
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
     * Edit a comment
     * @Endpoint : /v1/comments/{id}/update
     * @Method : PUT
     */
  updateComment () {
    this.app.put('/v1/comments/:id/update', (req, res) => {
      try {
        this.CommentModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate('author_id').then(comment => {
          if (comment) {
            res.status(201).json(
              {
                data: {
                  comment
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
     * Delete a comment
     * @Endpoint : /v1/comments/{id}/delete
     * @Method : DELETE
     */
  deleteComment () {
    this.app.delete('/v1/comments/:id/delete', (req, res) => {
      try {
        this.CommentModel.findByIdAndDelete(req.params.id).populate('author_id').then(comment => {
          if (comment) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This comment has successfully deleted'
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

module.exports = Comment
