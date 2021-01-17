const EventModel = require('../models/events')
const ShoppingItemsModel = require('../models/shopping_items')
const ShoppersModel = require('../models/shoppers')

/**
 * Shopping
 * @class
 */

class Shopping {
  constructor (app, connect) {
    this.app = app
    this.EventModel = connect.model('Event', EventModel)
    this.ShoppingItemsModel = connect.model('ShoppingItems', ShoppingItemsModel)
    this.ShoppersModel = connect.model('Shoppers', ShoppersModel)

    this.enableShoppingList()
    this.disableShoppingList()
    this.createShoppingItem()
    this.getShoppingItem()
    this.getShoppersItem()
    this.updateShoppingItem()
    this.deleteShoppingItem()
    this.defineShopper()
    this.removeShopper()
  }

  /**
     * Enable a shopping list in an event
     * @Endpoint : /v1/shoppings/enable
     * @Method : POST
     */
  enableShoppingList () {
    this.app.post('/v1/shoppings/enable', (req, res) => {
      try {
        this.EventModel.findByIdAndUpdate(req.body.event_id, {'shopping_list': true}, {new: true}).populate('managers, members').then(event => {
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
     * Disable a shopping list from an event
     * @Endpoint : /v1/shoppings/disable
     * @Method : POST
     */
  disableShoppingList () {
    this.app.post('/v1/shoppings/disable', (req, res) => {
      try {
        this.EventModel.findByIdAndUpdate(req.body.event_id, {'shopping_list': false}, {new: true}).populate('managers, members').then(event => {
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
     * Create an item in a shopping list
     * @Endpoint : /v1/shoppings/items/create
     * @Method : POST
     */
  createShoppingItem () {
    this.app.post('/v1/shoppings/items/create', (req, res) => {
      try {
        const shoppingItemsModel = new this.ShoppingItemsModel(req.body)
                
        this.EventModel.findById(req.body.event_id, function (err, event) {
          if (err) {
            console.log(err)
          }
          if (event) {
            shoppingItemsModel.save().then(item => {
              res.status(201).json(
                {
                  data: {
                    item
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
                  message: 'This event does not exist'
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
     * Get all items from a shopping list
     * @Endpoint : /v1/shoppings/{id}/items
     * @Method : GET
     */
  getShoppingItem () {
    this.app.get('/v1/shoppings/:id/items', (req, res) => {
      try {
        this.EventModel.findById(req.params.id).populate('managers, members').then(event => {
          if (event) {
            this.ShoppingItemsModel.find({'event_id': req.params.id}).populate('event_id').then(items => {
              res.status(200).json(
                {
                  data: {
                    total: Object.keys(items).length,
                    items
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
     * Get all reserved items from a shopping list
     * @Endpoint : /v1/shoppings/{id}/items/shoppers
     * @Method : GET
     */
  getShoppersItem () {
    this.app.get('/v1/shoppings/:id/items/shoppers', (req, res) => {
      try {
        this.EventModel.findById(req.params.id).populate('managers, members').then(event => {
          if (event) {
            this.ShoppersModel.find({'event_id': req.params.id, 'enable': true}).populate('event_id').then(items => {
              res.status(200).json(
                {
                  data: {
                    total: Object.keys(items).length,
                    items
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
     * Edit an item from a shopping list
     * @Endpoint : /v1/shoppings_item/{id}/update
     * @Method : PUT
     */
  updateShoppingItem () {
    this.app.put('/v1/shoppings_item/:id/update', (req, res) => {
      try {
        this.ShoppingItemsModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(item => {
          if (item) {
            res.status(201).json(
              {
                data: {
                  item
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
     * Delete an item from a shopping list
     * @Endpoint : /v1/shoppings_item/{id}/delete
     * @Method : DELETE
     */
  deleteShoppingItem () {
    this.app.delete('/v1/shoppings_item/:id/delete', (req, res) => {
      try {
        this.ShoppingItemsModel.findByIdAndDelete(req.params.id).then(item => {
          if (item) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This item has successfully deleted'
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
     * Define an user on an item
     * @Endpoint : /v1/shoppings_item/{id}/shoppers/define/{user_id}
     * @Method : POST
     */
  defineShopper () {
    this.app.post('/v1/shoppings_item/:id/shoppers/define/:user_id', (req, res) => {
      try {
        const shoppersModel = new this.ShoppersModel(req.body)
                
        this.ShoppingItemsModel.findById(req.params.id, function (err, item) {
          if (err) {
            console.log(err)
          }
          if (item) {
            shoppersModel.save().then(item => {
              res.status(201).json(
                {
                  data: {
                    item
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
                  status: 400,
                  message: 'Item does not exist'
                } 
              }
            ) 
          }
        }).populate('event_id')
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
     * undefine an user from an item
     * @Endpoint : /v1/shoppings_item/{id}/shoppers/undefine/{user_id}
     * @Method : POST
     */
  removeShopper () {
    this.app.post('/v1/shoppings_item/:id/shoppers/undefine/:user_id', (req, res) => {
      try {
        this.ShoppersModel.deleteOne({'item_id': req.params.id}).then(item => {
          if (item) {
            res.status(201).json(
              {
                data: {
                  item
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

module.exports = Shopping
