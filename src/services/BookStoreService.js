'use strict'

const logger = require('../utils/logger')

class BookStoreService {
  constructor(repositories) {
    this.BookRepository = repositories['BookRepository']
    this.BookRepository.test()
  }

  getBooks(start = 0, limit = 25) {
    logger.debug('get books')
    return this.BookRepository.getBooks(start, limit)
  }

  test() {
    logger.debug('test', BookStoreService)
  }
}

module.exports = BookStoreService
