const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  content: { type: String, required: true },
  poll_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Polls',
    required: true
  },
  question_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PollQuestion',
    required: true
  },
  enable: { type: Boolean, default: 1, required: true }
}, {
  collection: 'polls_questions_answers',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema
