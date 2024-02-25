const mongoose = require('mongoose')
const Path = require('path')
require('dotenv').config()

class MongoStorage {
  constructor (entity) {
    this.entityName = entity.charAt(0).toUpperCase() + entity.slice(1)
    this.Model = require(Path.join(__dirname, `../models/${this.entityName}.model.js`))
    this.connect()
  }

  async connect () {
    try {
      const connectionUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
      await mongoose.connect(connectionUrl)
    } catch (error) {
      console.error(`Connection error: ${error}`)
      throw new Error('Unable to connect to the database')
    }
  }

  async getAll () {
    return await this.Model.find()
  }

  async retrieve (id) {
    return await this.Model.findOne({ id })
  }

  async create (data) {
    const newEntity = new this.Model(data)
    await newEntity.save()
    return newEntity
  }

  async delete (id) {
    return await this.Model.deleteOne({ id })
  }

  async update (id, data) {
    return await this.Model.updateOne({ id }, data)
  }
}

module.exports = MongoStorage
