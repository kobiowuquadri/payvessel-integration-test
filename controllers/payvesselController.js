const PayVessel = require('../models/payvesselModel')
const axios = require('axios')

const createReservedAccount = async (req, res) => {
  try {
    const { email, name, phoneNumber } = req.body

    const reservedAccount = await axios.post(
      process.env.PAYVESSEL_BASEURL,
      req.body,
      {
        headers: {
          'api-key': process.env.PAYVESSEL_API_KEY,
          'api-secret': `Bearer ${process.env.PAYVESSEL_API_SECRET}`,
          'Content-Type': 'application/json'
        }
      }
    )
    

    console.log(reservedAccount)

    const newUser = new PayVessel({
      email,
      name,
      phoneNumber,
      bankcode: [process.env.PAYVESSEL_BANKCODE],
      businessid:process.env.PAYVESSEL_BUSINESSID,
      account_type: process.env.PAYVESSEL_ACCOUNT_TYPE,
      bvn: ""
    })

    const savedUser = newUser.save()
    res.status(200).json({
      success: true,
      message: 'Reserved account created successfully',
      savedUser
    })
  } catch (err) {
    console.error(err)
    res.status(404).json({ success: false, message: err.message })
  }
}

module.exports = createReservedAccount
