const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: null, required: true },
  date_begin: { type: Date, default: Date.now, required: true },
  icon: { type: String, default: null },
  cover_image: { type: String, default: null },
  group_type: { type: String, default: 'public', required: true },
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
  permissions: {
    member_publish: {type: Boolean, default: true, required: true}, 
    member_create_event: {type: Boolean, default: false, required: true} 
  },
  enable: { type: Boolean, default: 1, required: true }
}, {
  collection: 'groups',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema
