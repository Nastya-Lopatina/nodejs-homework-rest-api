const mongoose = require('mongoose')

const connectMongo = async () => {
  return await mongoose.connect(process.env.MONGODB_URL)
}

module.exports = {
  connectMongo
}
