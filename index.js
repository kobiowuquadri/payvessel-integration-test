const express = require('express')
require("dotenv").config()
const connectToDB = require('./database/db')
const app = express()
const router = require('./routes/payvesselRoute')
const port = process.env.port

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router);


app.listen(port, () => {
  console.log(`Server running on port ${port}`)

  connectToDB()
})

