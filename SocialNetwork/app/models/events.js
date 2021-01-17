const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: null },
  date_begin: { type: Date, default: Date.now, required: true },
  date_end: { type: Date, default: null },
  location: { type: String, default: null },
  cover_image: { type: String, default: null },
  public: {type: Boolean, default: 1},
  shopping_list: {type: Boolean, default: 0},
  tickets: {type: Boolean, default: 0},
  managers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  enable: { type: Boolean, default: 1, required: true }
}, {
  collection: 'events',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema
