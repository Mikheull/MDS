const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: { type: String, required: true},
  description: { type: String },
  photo: { type: String },
  date_creation: { type: Date, default: Date.now },
  date_modified: { type: Date, default: Date.now },
  status: { type: Boolean, default: 1, required: true },
}, {
  collection: 'products',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema
