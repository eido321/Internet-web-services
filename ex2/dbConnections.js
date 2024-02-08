const mongoose = require('mongoose')
const connectionUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
mongoose
  .connect(connectionUrl)
  .then(() => {
    console.log(`Connected to MongoDB at ${process.env.DB_HOST}`)
  })
  .catch(err => console.log(`Connection error: ${err}`))
