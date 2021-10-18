const app = require('../app')

const { dbConnect } = require('../db/connection.js')

const PORT = process.env.PORT || 3000

const start = async () => {
  try {
    await dbConnect()
    app.listen(PORT, () => {
      console.log('Database connection successful')
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

start()
