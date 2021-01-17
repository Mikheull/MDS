const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  discussion_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discussion',
    required: true
  },
  content: { type: String, required: true },
  date_creation: { type: Date, default: Date.now, required: true },
  content_modified: { type: String, default: null },
  date_modified: { type: Date, default: null },
  enable: { type: Boolean, default: 1, required: true }
}, {
  collection: 'messages',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema
