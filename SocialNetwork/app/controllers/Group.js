const GroupModel = require('../models/groups')
const InvitationModel = require('../models/invitations')

/**
 * Group
 * @class
 */

class Group {
  constructor (app, connect) {
    this.app = app
    this.GroupModel = connect.model('Group', GroupModel)
    this.InvitationModel = connect.model('Invitation', InvitationModel)

    this.getGroups()
    this.getGroup()
    this.createGroup()
    this.inviteGroup()
    this.joinGroup()
    this.leaveGroup()
    this.updateGroup()
    this.deleteGroup()
  }

  /**
     * Get all groups
     * @Endpoint : /v1/groups
     * @Method : GET
     */
  getGroups () {
    this.app.get('/v1/groups', (req, res) => {
      try {
        this.GroupModel.find({}, function (err, groups) {
          if (err) {
            console.log(err)
          }
          res.status(200).json(
            {
              data: {
                total: Object.keys(groups).length,
                groups
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
     * Get one group
     * @Endpoint : /v1/groups/{id}
     * @Method : GET
     */
  getGroup () {
    this.app.get('/v1/groups/:id', (req, res) => {
      try {
        this.GroupModel.findById(req.params.id).populate('managers, members').then(group => {
          if (group) {
            res.status(200).json(
              {
                data: {
                  group
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
     * Create a group
     * @Endpoint : /v1/groups/create
     * @Method : POST
     */
  createGroup () {
    this.app.post('/v1/groups/create', (req, res) => {
      try {
        const GroupModel = new this.GroupModel(req.body)
                
        if (req.body.managers && req.body.managers[0]) {
          if (req.body.group_type && (req.body.group_type === 'public' || req.body.group_type === 'private' || req.body.group_type === 'secret')) {
            GroupModel.save().then(group => {
              res.status(201).json(
                {
                  data: {
                    group
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
                  message: 'Group_type not accepted (public, private or secret)'
                } 
              }
            ) 
          }
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
     * Invite in a group
     * @Endpoint : /v1/groups/{id}/invite
     * @Method : POST
     */
  inviteGroup () {
    this.app.post('/v1/groups/:id/invite', (req, res) => {
      try {
        this.GroupModel.findById(req.params.id)
          .then(group => {
            const _managers = group.managers
            const _members = group.members
            const _userId = (req.body.id_receiver) ? req.body.id_receiver : false
            // const _role = (req.body.manager) ? 'manager' : 'member'
                    
            if (_managers.includes(_userId) || _members.includes(_userId)) {
              res.status(400).json(
                {
                  error: {
                    code: 400,
                    message: 'User already in this group'
                  }
                }
              ) 
            } else {
              let data = req.body
              data.id_destination = req.params.id

              const InvitationModel = new this.InvitationModel(data)

              this.InvitationModel.findOne({ type: 'group', id_destination: req.params.id, id_receiver: _userId }, function (err, user) {
                if (err) {
                  console.log(err)
                }
                if (user) {
                  res.status(400).json(
                    {
                      error: {
                        code: 400,
                        message: 'Invitation already sent'
                      }
                    }
                  ) 
                } else {
                  InvitationModel.save().then(invitation => {
                    res.status(201).json(
                      {
                        data: {
                          invitation
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
              }).populate('id_receiver') 
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
     * Join a group
     * @Endpoint : /v1/groups/{id}/join
     * @Method : PUT
     */
  joinGroup () {
    this.app.put('/v1/groups/:id/join', (req, res) => {
      try {
        this.GroupModel.findById(req.params.id)
          .then(group => {
            const _managers = group.managers
            const _members = group.members
            const _userId = (req.body.user_id) ? req.body.user_id : false
            const _role = (req.body.manager) ? 'manager' : 'member'
            let _access = (group.group_type === 'public')

            if (_access) {
              if (_managers.includes(_userId) || _members.includes(_userId)) {
                res.status(400).json(
                  {
                    error: {
                      code: 400,
                      message: 'User already in this group'
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
                            
                this.GroupModel.findByIdAndUpdate(req.params.id, data, {new: true}).populate('managers, members').then(group => {
                  res.status(201).json(
                    {
                      data: {
                        group
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
            } else {
              this.InvitationModel.findOneAndUpdate({ type: 'group', id_destination: req.params.id, id_receiver: _userId, enable: true }, {enable: false, date_end: Date.now()}, {new: true}).populate('id_receiver').then(invitation => {
                console.log(invitation)
                let data
                if (_role === 'member') {
                  _members.push(_userId)
                  data = {members: _members}
                } else if (_role === 'manager') {
                  _managers.push(_userId)
                  data = {managers: _managers}
                }

                if (invitation) {
                  this.GroupModel.findByIdAndUpdate(req.params.id, data, {new: true}).populate('managers, members').then(group => {
                    res.status(201).json(
                      {
                        data: {
                          group
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
                        message: 'Failed to connect to this group'
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
                        message: 'Failed to connect to this group'
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
      }
    })
  }

  /**
     * Leave a group
     * @Endpoint : /v1/groups/{id}/leave
     * @Method : PUT
     */
  leaveGroup () {
    this.app.put('/v1/groups/:id/leave', (req, res) => {
      try {
        this.GroupModel.findById(req.params.id).populate('managers, members').then(group => {
          const _managers = group.managers
          const _members = group.members
          const _userId = (req.body.user_id) ? req.body.user_id : false
          const _role = (req.body.manager) ? 'manager' : 'member'
          let data
                    
          if (_role === 'member') {
            if (_members.includes(_userId)) {
              _members.splice(_members.indexOf(_userId), 1)
              data = {members: _members}
    
              this.GroupModel.findByIdAndUpdate(req.params.id, data, {new: true}).populate('managers, members').then(group => {
                res.status(201).json(
                  {
                    data: {
                      group
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
                    message: 'User not in this group'
                  } 
                }
              ) 
            }
          } else if (_role === 'manager') {
            if (_managers.includes(_userId)) {
              _managers.splice(_managers.indexOf(_userId), 1)
              data = {managers: _managers}
              this.GroupModel.findByIdAndUpdate(req.params.id, data, {new: true}).populate('managers, members').then(group => {
                res.status(201).json(
                  {
                    data: {
                      group
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
                    message: 'User not in this group'
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
     * Edit a group
     * @Endpoint : /v1/groups/{id}/update
     * @Method : PUT
     */
  updateGroup () {
    this.app.put('/v1/groups/:id/update', (req, res) => {
      try {
        let _groupTypeErr = false
        if (req.body.group_type) {
          _groupTypeErr = true
          if (req.body.group_type === 'public' || req.body.group_type === 'private' || req.body.group_type === 'secret') {
            _groupTypeErr = false
          }
        }

        if (_groupTypeErr) {
          res.status(400).json(
            { 
              error: {
                code: 400,
                message: 'Group_type not accepted (public, private or secret)'
              } 
            }
          ) 
        } else {
          this.GroupModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate('managers, members').then(group => {
            if (group) {
              res.status(201).json(
                {
                  data: {
                    group
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
     * Delete a group
     * @Endpoint : /v1/groups/{id}/delete
     * @Method : DELETE
     */
  deleteGroup () {
    this.app.delete('/v1/groups/:id/delete', (req, res) => {
      try {
        this.GroupModel.findByIdAndDelete(req.params.id).populate('managers, members').then(group => {
          if (group) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This group has successfully deleted'
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

module.exports = Group
