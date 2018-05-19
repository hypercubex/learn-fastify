'use strict'

const logger = require('../utils/logger')

module.exports = {
  options: { prefix: '/books' },
  routes: (fastify, opts, next) => {
    fastify.route({
      method: 'GET',
      url: '/',
      // schema: {},
      handler: async (request, reply) => {
        const books = fastify.services['BookStoreService'].getBooks()
        fastify.log.debug('books', books)
        reply.send(books)
      }
    })

    fastify.route({
      method: 'GET',
      url: '/:bookId',
      // schema: {},
      handler: async (request, reply) => {
        reply.send('book')
      }
    })

    fastify.route({
      method: 'POST',
      url: '/',
      // schema: {},
      handler: async (request, reply) => {
        reply.send('post')
      }
    })

    next()
  }
}