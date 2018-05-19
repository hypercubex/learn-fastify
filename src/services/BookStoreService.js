'use strict'

const BookRepositoryClass = require('../repositories/BookRepository')
const logger = require('../utils/logger')

class BookStoreService {
  constructor(repositories) {
    this[BookRepositoryClass.name] = repositories[BookRepositoryClass.name]
  }

  getBooks(start = 0, limit = 25) {
    logger.debug('get books')
    return this.BookRepository.getBooks(start, limit)
  }
}

module.exports = BookStoreService
