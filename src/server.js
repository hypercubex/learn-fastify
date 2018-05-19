'use strict'

const env = require('./config/env')
const databases = require('./config/databases')
const repositories = require('./config/repositories')
const routes = require('./config/routes')
const services = require('./config/services')
const swagger = require('./config/swagger')
const logger = require('./utils/logger')

const fastify = require('fastify')({ logger })

// TODO break down to plugins/functions
exports.setup = async () => {
  logger.debug('start setup...')
  fastify.decorate('env', env)
  // you should not see the log
  logger.trace('env config: ', fastify.env)

  logger.debug('connecting database(s)...')
  const databaseConnections = await databases.connect()
  fastify.decorate('databases', databaseConnections)
  // you do not want to see the log
  logger.trace('connected database(s): ', fastify.databases)

  logger.debug('registering repositories...')
  const repositoresInstances = repositories.setup(fastify.databases)
  fastify.decorate('repositories', repositoresInstances)
  logger.trace('registered repositories', fastify.repositories)

  logger.debug('registering services...')
  const serviceInstances = services.setup(fastify.repositories)
  fastify.decorate('services', serviceInstances)

  logger.debug('registering routes...')
  routes.register(fastify)

  logger.debug('registering swagger...')
  swagger.register(fastify)

  logger.debug('registered routes: ', fastify.printRoutes())
}

exports.start = async () => {
  const port = env.get('port')

  try {
    await fastify.listen(port)
    logger.debug(`server started at port:`, port)
  } catch (err) {
    logger.error('failed starting server', err.stack)
    process.exit(1)
  }
}