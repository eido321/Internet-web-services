const { Router } = require('express')
const express = require('express')
const path = require('path')

const staticFileRouter = new Router()

staticFileRouter.use('/scripts', express.static(path.join(__dirname, '../scripts')))
staticFileRouter.use('/styles', express.static(path.join(__dirname, '../styles')))

staticFileRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

module.exports = { middlewareRouter: staticFileRouter }
