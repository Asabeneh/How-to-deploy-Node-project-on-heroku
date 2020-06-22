const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  skills: [String],
  bio: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('student', studentSchema)
