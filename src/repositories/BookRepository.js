'use strict'

const { modelName, schema, collectionName } = require('../models/books/Books')
const logger = require('../utils/logger')

const dbName = 'books'

class BookRepository {
  constructor(databases) {
    this.Books = databases[dbName].model(modelName, schema, collectionName)
  }

  async getBooks(start = 0, limit = 25) {
    logger.debug(`get books, from ${start} to ${limit}`)
    return await this.Books.find().skip(start).limit(limit)
  }
}

module.exports = BookRepository
