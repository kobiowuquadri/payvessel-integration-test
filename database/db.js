const mongoose = require('mongoose')


const connectToDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL)
    console.log('Connected to Database Successfully.')
  }
  catch(err){
     console.error(err)
  }
}


module.exports = connectToDB