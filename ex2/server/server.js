const express = require('express')
const logger = require('morgan')
const server = express()
const port = process.env.PORT || 3000
const { errorHandler } = require('../middlewares/errorHandler')

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(logger('dev')) // server.use(logger("combined"));
server.use(errorHandler)

const { familyReunificationFormRouter } = require('../routers/familyReunificationFormRouter')
const { middlewareRouter } = require('../routers/staticFileRouter')

server.use('/api/familyReunificationForm', familyReunificationFormRouter)
server.use(middlewareRouter)

server.listen(port, () => console.log(`Express server is running on port ${port}`))

server.use((req, res) => {
  res.status(400).send('Something is broken!')
})

module.exports = server
