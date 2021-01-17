const UserModel = require('../models/users')

/**
 * User
 * @class
 */

class User {
  constructor (app, connect) {
    this.app = app
    this.UserModel = connect.model('User', UserModel)

    this.getUsers()
    this.getUser()
    this.createUser()
    this.updateUser()
    this.deleteUser()
  }

  /**
     * Get all users
     * @Endpoint : /v1/users
     * @Method : GET
     */
  getUsers () {
    this.app.get('/v1/users', (req, res) => {
      try {
        // const filters = [];
        // if(req.body.query){
        //     filters.push({
        //         '$match': req.body.query
        //     });
        // }
        // if(req.body.sort){
        //     filters.push({
        //         '$sort': req.body.sort
        //     });
        // }
                
        // this.UserModel.aggregate(filters, function(err, users) {
        this.UserModel.find({}, function (err, users) {
          if (err) {
            console.log(err)
          }
          res.status(200).json(
            {
              data: {
                total: Object.keys(users).length,
                users
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
     * Get one user
     * @Endpoint : /v1/users/{id}
     * @Method : GET
     */
  getUser () {
    this.app.get('/v1/users/:id', (req, res) => {
      try {
        this.UserModel.findById(req.params.id).then(user => {
          if (user) {
            res.status(200).json(
              {
                data: {
                  user
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
     * Create an user
     * @Endpoint : /v1/users/create
     * @Method : POST
     */
  createUser () {
    this.app.post('/v1/users/create', (req, res) => {
      try {
        const userModel = new this.UserModel(req.body)

        this.UserModel.findOne({ email: req.body.email }, function (err, user) {
          if (err) {
            console.log(err)
          }
          if (user) {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'This email already exist'
                }
              }
            ) 
          } else {
            userModel.save().then(user => {
              res.status(201).json(
                {
                  data: {
                    user
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
     * Edit an user
     * @Endpoint : /v1/users/{id}/update
     * @Method : PUT
     */
  updateUser () {
    this.app.put('/v1/users/:id/update', (req, res) => {
      try {
        this.UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(user => {
          if (user) {
            res.status(201).json(
              {
                data: {
                  user
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
     * Delete an user
     * @Endpoint : /v1/users/{id}/delete
     * @Method : DELETE
     */
  deleteUser () {
    this.app.delete('/v1/users/:id/delete', (req, res) => {
      try {
        this.UserModel.findByIdAndDelete(req.params.id).then(user => {
          if (user) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This user has successfully deleted'
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

module.exports = User
