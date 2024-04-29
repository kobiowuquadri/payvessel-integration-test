const express = require('express')
require("dotenv").config()
const connectToDB = require('./database/db')
const app = express()

const port = process.env.port

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.listen(port, () => {
  console.log(`Server running on port ${port}`)

  connectToDB()
})

