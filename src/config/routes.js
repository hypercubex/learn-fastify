'use strict'

const controllers = require('../controllers')
const logger = require('../utils/logger')

module.exports.register = fastify => {
  Object.values(controllers).forEach(({ routes, options }) => {
    if (!routes) {
      return
    }

    fastify.register(routes, options)
  })
}