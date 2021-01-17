const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  type: { type: String, required: true, enum: ['group', 'event'] },
  id_destination: {type: String, required: true},
  role: {type: String, default: 'member', required: true},
  id_receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  id_sender: { type: String, default: null, required: true },
  date_begin: { type: Date, default: Date.now, required: true },
  date_end: { type: Date, default: null },
  enable: { type: Boolean, default: 1, required: true }
}, {
  collection: 'invitations',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema
