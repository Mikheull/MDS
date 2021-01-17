const AlbumModel = require('../models/albums')
const AlbumPicturesModel = require('../models/albums_pictures')
const CommentModel = require('../models/comments')

/**
 * Album
 * @class
 */

class Album {
  constructor (app, connect) {
    this.app = app
    this.AlbumModel = connect.model('Album', AlbumModel)
    this.AlbumPicturesModel = connect.model('AlbumPictures', AlbumPicturesModel)
    this.CommentModel = connect.model('Comment', CommentModel)

    this.getAlbums()
    this.getAlbum()
    this.getAlbumPictures()
    this.getAlbumPicture()
    this.getAlbumPicturesComments()
    this.createAlbumPicture()
    this.createAlbum()
    this.updateAlbum()
    this.updateAlbumPicture()
    this.deleteAlbum()
    this.deleteAlbumPicture()
  }

  /**
     * Get all albums
     * @Endpoint : /v1/albums
     * @Method : GET
     */
  getAlbums () {
    this.app.get('/v1/albums', (req, res) => {
      try {
        this.AlbumModel.find({}, function (err, albums) {
          if (err) {
            console.log(err)
          }
          res.status(200).json(
            {
              data: {
                total: Object.keys(albums).length,
                albums
              }
            }
          )
        }).populate('event_ref')
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
     * Get one album
     * @Endpoint : /v1/albums/{id}
     * @Method : GET
     */
  getAlbum () {
    this.app.get('/v1/albums/:id', (req, res) => {
      try {
        this.AlbumModel.findById(req.params.id).populate('event_ref').then(album => {
          if (album) {
            res.status(200).json(
              {
                data: {
                  album
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
     * Get all pictures in album
     * @Endpoint : /v1/albums/{id}/pictures
     * @Method : GET
     */
  getAlbumPictures () {
    this.app.get('/v1/albums/:id/pictures', (req, res) => {
      try {
        this.AlbumModel.findById(req.params.id).populate('event_ref').then(albums => {
          if (albums) {
            this.AlbumPicturesModel.find({'album_ref': req.params.id}).populate('album_ref, author_id').then(pictures => {
              res.status(200).json(
                {
                  data: {
                    total: Object.keys(pictures).length,
                    pictures
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
     * Get one picture
     * @Endpoint : /v1/albums/{id}/pictures/{picture_id}
     * @Method : GET
     */
  getAlbumPicture () {
    this.app.get('/v1/albums/:id/pictures/:picture_id', (req, res) => {
      try {
        this.AlbumPicturesModel.findById(req.params.picture_id).populate('album_ref, author_id').then(picture => {
          if (picture) {
            res.status(200).json(
              {
                data: {
                  picture
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
     * Get all comments of a picture in album
     * @Endpoint : /v1/albums/{id}/pictures/{picture_id}/comments
     * @Method : GET
     */
  getAlbumPicturesComments () {
    this.app.get('/v1/albums/:id/pictures/:picture_id/comments', (req, res) => {
      try {
        this.AlbumPicturesModel.find({'album_ref': req.params.id}).populate('event_ref').then(picture => {
          if (picture) {
            this.CommentModel.find({'ref': req.params.picture_id, 'type': 'album'}).populate('author_id').then(comments => {
              res.status(200).json(
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
     * Create an album
     * @Endpoint : /v1/albums/create
     * @Method : POST
     */
  createAlbum () {
    this.app.post('/v1/albums/create', (req, res) => {
      try {
        const albumModel = new this.AlbumModel(req.body)
                
        this.AlbumModel.findOne({ title: req.body.title }, function (err, album) {
          if (err) {
            console.log(err)
          }
          if (album) {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'An album with this name already exist'
                }
              }
            )
          } else {
            albumModel.save().then(album => {
              res.status(201).json(
                {
                  data: {
                    album
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
        }).populate('event_ref')
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
     * Create a picture in an album
     * @Endpoint : /v1/albums/{id}/pictures/create
     * @Method : POST
     */
  createAlbumPicture () {
    this.app.post('/v1/albums/:id/pictures/create', (req, res) => {
      try {
        let data = req.body
        data.album_ref = req.params.id

        const albumPicturesModel = new this.AlbumPicturesModel(data)
                
        albumPicturesModel.save().then(album => {
          res.status(201).json(
            {
              data: {
                album
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
     * Edit an album
     * @Endpoint : /v1/albums/{id}/update
     * @Method : PUT
     */
  updateAlbum () {
    this.app.put('/v1/albums/:id/update', (req, res) => {
      try {
        this.AlbumModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate('event_ref').then(album => {
          if (album) {
            res.status(201).json(
              {
                data: {
                  album
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
     * Edit a picture in an album
     * @Endpoint : /v1/albums/{id}/pictures/{picture_id}/update
     * @Method : PUT
     */
  updateAlbumPicture () {
    this.app.put('/v1/albums/:id/pictures/:picture_id/update', (req, res) => {
      try {
        let data = req.body
        data.album_ref = req.params.id

        this.AlbumPicturesModel.findByIdAndUpdate(req.params.picture_id, data, {new: true}).populate('album_ref, author_id').then(picture => {
          if (picture) {
            res.status(201).json(
              {
                data: {
                  picture
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
     * Delete an album
     * @Endpoint : /v1/albums/{id}/delete
     * @Method : DELETE
     */
  deleteAlbum () {
    this.app.delete('/v1/albums/:id/delete', (req, res) => {
      try {
        this.AlbumModel.findByIdAndDelete(req.params.id).populate('event_ref').then(album => {
          if (album) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This album has successfully deleted'
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
     * Delete a picture in an album
     * @Endpoint : /v1/albums/{id}/pictures/{picture_id}/delete
     * @Method : DELETE
     */
  deleteAlbumPicture () {
    this.app.delete('/v1/albums/:id/pictures/:picture_id/delete', (req, res) => {
      try {
        this.AlbumPicturesModel.findByIdAndDelete(req.params.picture_id).then(picture => {
          if (picture) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This picture has successfully deleted'
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

module.exports = Album
