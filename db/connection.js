const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const dbConnect = async function (MONGODB_URL) {
  try {
    await mongoose.connect(MONGODB_URL)
    console.log('Database connection successful')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = {
  dbConnect
}
