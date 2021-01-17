const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  type: { type: String, required: true, enum: ['group', 'event'] },
  ref: {type: String, required: true},
  date_creation: { type: Date, default: Date.now, required: true },
  enable: { type: Boolean, default: 1, required: true }
}, {
  collection: 'discussions',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema
