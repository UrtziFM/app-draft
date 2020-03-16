const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true
  },
  {
    collection: 'user'
  }
)

const User = mongoose.model('User', userSchema)
module.exports = User
