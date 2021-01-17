const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  event_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  title: {type: String, required: true},
  date_creation: { type: Date, default: Date.now, required: true },
  enable: { type: Boolean, default: 1, required: true }
}, {
  collection: 'albums',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema
