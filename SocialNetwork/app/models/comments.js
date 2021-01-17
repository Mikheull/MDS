const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  type: { type: String, default: null, required: true },
  author_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  ref: {type: String, required: true},
  content: { type: String, default: null },
  date_creation: { type: Date, default: Date.now, required: true },
  content_modified: { type: String, default: null },
  date_modified: { type: Date, default: null },
  enable: { type: Boolean, default: 1, required: true }
}, {
  collection: 'comments',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema
