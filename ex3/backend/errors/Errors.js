const { InternalServer } = require('./InternalServerError')
const { BadRequest } = require('./BadRequestError')
const { NotFound } = require('./NotFoundError')
module.exports = {
  NotFound,
  InternalServer,
  BadRequest
}
