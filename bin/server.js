const app = require('../app')

const { dbConnect } = require('../db/connection')

const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL

async function start() {
  try {
    await dbConnect(MONGODB_URL)
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
