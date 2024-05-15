const mongoose = require('mongoose')

const payvesselSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  bankcode: {
    type: Array,
    required: true
  },
  businessid: {
    type: String,
    required: true
  },
  account_type: {
    type: String
  },
  bvn: {
    type: String
  }
})

const PayVessel = mongoose.model('PayVessel', payvesselSchema)

module.exports = PayVessel
