const express = require('express')
const logger = require('morgan')
require('express-async-errors')
const fs = require('fs')
const path = require('path')
const server = express()
const port = process.env.PORT || 3000
const { errorHandler } = require('../middlewares/errorHandler')
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs.txt'), { flags: 'a' })

server.use(logger('combined', { stream: accessLogStream }))
server.use(logger('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

const { familyReunificationFormRouter } = require('../routers/familyReunificationFormRouter')
const { staticFileRouter } = require('../routers/staticFileRouter')

server.use('/api/familyReunificationForm', familyReunificationFormRouter)
server.use(staticFileRouter)
server.use(errorHandler)

server.listen(port, () => console.log(`Express server is running on port ${port}`))

server.use((req, res) => {
  res.status(400).send('Something is broken!')
})

module.exports = server
