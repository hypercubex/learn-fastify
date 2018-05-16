'use strict'

const { modelName, schema, collectionName } = require('../models/books/Books')
const logger = require('../utils/logger')
const dbName = 'books'

class BookRepository {
  constructor(database) {
    this.Books = database.model(modelName, schema, collectionName)
  }

  test() {
    logger.debug('test', BookRepository)
  }

  async getBooks(start = 0, limit = 25) {
    logger.debug(`get books, from ${start} to ${limit}`)
    return await this.Books.find().skip(start).limit(limit)
  }
}

module.exports = {
  classInstance: BookRepository,
  dbName
}