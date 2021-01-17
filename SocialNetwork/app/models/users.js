const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  username: { type: String, required: true, unique: true, lowercase: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tel: { type: String },
  birthday: { type: String },
  adress: { type: String },
  city: { type: String },
  zip_code: { type: String },
  date_creation: { type: Date, default: Date.now },
  date_modified: { type: Date, default: Date.now },
  status: { type: Boolean, default: 1, required: true },
  image_profile: {
    type: String,
    default: 'https://www.as-promotion.fr/wp-content/uploads/2016/09/no-photo.png'
  }
}, {
  collection: 'users',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema
