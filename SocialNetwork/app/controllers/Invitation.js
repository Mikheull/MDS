const InvitationModel = require('../models/invitations')

/**
 * Invitation
 * @class
 */

class Invitation {
  constructor (app, connect) {
    this.app = app
    this.InvitationModel = connect.model('Invitation', InvitationModel)

    this.getInvitations()
    this.getInvitation()
    this.createInvitation()
    this.updateInvitation()
    this.deleteInvitation()
  }

  /**
     * Get all invitations
     * @Endpoint : /v1/invitations
     * @Method : GET
     */
  getInvitations () {
    this.app.get('/v1/invitations', (req, res) => {
      try {
        this.InvitationModel.find({}, function (err, invitations) {
          if (err) {
            console.log(err)
          }
          res.status(200).json(
            {
              data: {
                // total: Object.keys(invitations).length,
                invitations
              }
            }
          )
        }).populate('id_receiver')
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
     * Get one invitation
     * @Endpoint : /v1/invitations/{id}
     * @Method : GET
     */
  getInvitation () {
    this.app.get('/v1/invitations/:id', (req, res) => {
      try {
        this.InvitationModel.find(req.params.id).populate('id_receiver').then(invitation => {
          if (invitation) {
            res.status(200).json(
              {
                data: {
                  invitation
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
     * Create an invitation
     * @Endpoint : /v1/invitations/create
     * @Method : POST
     */
  createInvitation () {
    this.app.post('/v1/invitations/create', (req, res) => {
      try {
        const invitationModel = new this.InvitationModel(req.body)
                
        if (req.body.type && (req.body.type === 'group' || req.body.type === 'event')) {
          this.InvitationModel.findOne({ type: 'group', id_destination: req.body.id_destination, id_receiver: req.body.id_receiver }, function (err, user) {
            if (err) {
              console.log(err)
            }
            if (user) {
              res.status(400).json(
                { 
                  error: {
                    code: 400,
                    message: 'Invitation already exist'
                  } 
                }
              ) 
            } else {
              invitationModel.save().then(invitation => {
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
        } else {
          res.status(400).json(
            {
              error: {
                code: 400,
                message: 'Type is invalid only group or event'
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
     * Edit an invitation
     * @Endpoint : /v1/invitations/{id}/update
     * @Method : PUT
     */
  updateInvitation () {
    this.app.put('/v1/invitations/:id/update', (req, res) => {
      try {
        this.InvitationModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate('id_receiver').then(invitation => {
          if (invitation) {
            res.status(201).json(
              {
                data: {
                  invitation
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
     * Delete an invitation
     * @Endpoint : /v1/invitations/{id}/delete
     * @Method : DELETE
     */
  deleteInvitation () {
    this.app.delete('/v1/invitations/:id/delete', (req, res) => {
      try {
        this.InvitationModel.findByIdAndDelete(req.params.id).populate('id_receiver').then(invitation => {
          if (invitation) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This invitation has successfully deleted'
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

module.exports = Invitation
