const ProductModel = require('../models/products')

/**
 * Product
 * @class
 */

class Product {
  constructor (app, connect) {
    this.app = app
    this.ProductModel = connect.model('Product', ProductModel)

    this.getProducts()
    this.getProduct()
    this.createProduct()
    this.updateProduct()
    this.deleteProduct()
  }

  /**
     * Get all products
     * @Endpoint : /v1/products
     * @Method : GET
     */
  getProducts () {
    this.app.get('/v1/products', (req, res) => {
      try {
        this.ProductModel.find({}, function (err, products) {
          if (err) {
            console.log(err)
          }
          res.status(200).json(
            {
              data: {
                total: Object.keys(products).length,
                products
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
     * Get one product
     * @Endpoint : /v1/products/{id}
     * @Method : GET
     */
  getProduct () {
    this.app.get('/v1/products/:id', (req, res) => {
      try {
        this.ProductModel.findById(req.params.id).then(product => {
          if (product) {
            res.status(200).json(
              {
                data: {
                  product
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
     * Create an product
     * @Endpoint : /v1/products/create
     * @Method : POST
     */
  createProduct () {
    this.app.post('/v1/products/create', (req, res) => {
      try {
        const productModel = new this.ProductModel(req.body)

          productModel.save().then(product => {
            res.status(201).json(
              {
                data: {
                  product
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
     * Edit an product
     * @Endpoint : /v1/products/{id}/update
     * @Method : PUT
     */
  updateProduct () {
    this.app.put('/v1/products/:id/update', (req, res) => {
      try {
        this.ProductModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(product => {
          if (product) {
            res.status(201).json(
              {
                data: {
                  product
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
     * Delete an product
     * @Endpoint : /v1/products/{id}/delete
     * @Method : DELETE
     */
  deleteProduct () {
    this.app.delete('/v1/products/:id/delete', (req, res) => {
      try {
        this.ProductModel.findByIdAndDelete(req.params.id).then(product => {
          if (product) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This product has successfully deleted'
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

module.exports = Product
