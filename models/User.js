const { model, Schema } = require('mongoose')

const User = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  agreement: {
    type: Boolean
  },
  authHash: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  tournaments: [
    {
      tournamentNo: Number,
      score: Number,
      finished: Boolean,
      bPPoints: Number,
      bPRank: Number
    }
  ],
  totalPoints: {
    type: Number,
    default: 0
  },
  totalBPPoints: {
    type: Number,
    default: 0
  },
  messages: [
    {
      title: String,
      text: String,
      date: {
        type: Date,
        default: Date.now
      },
      read: {
        type: Boolean,
        required: true,
        default: false
      }
    }
  ],
  medals: []
})

module.exports = model('user', User)