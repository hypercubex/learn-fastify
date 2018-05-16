'use strict'

const fastifySwagger = require('fastify-swagger')

const env = require('../config/env')
const projectPackage = require('../../package')

const swagger = {
  info: {
    title: projectPackage.name,
    description: projectPackage.description,
    version: projectPackage.version
  },
  host: env.get('ip'),
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json']
}

module.exports.register = fastify => {
  fastify.register(fastifySwagger, { swagger, exposeRoute: true })
}
