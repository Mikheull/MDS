const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  album_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
    required: true
  },
  path: {type: String, required: true},
  title: {type: String, required: true},
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date_creation: { type: Date, default: Date.now },
  enable: { type: Boolean, default: 1 }
}, {
  collection: 'albums_pictures',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema
