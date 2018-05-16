'use strict'

const mongoose = require('mongoose')

const env = require('./env')
const logger = require('../utils/logger')

module.exports.connect = async () => {
  logger.debug('connecting books db...')
  const booksDbConn = await mongoose.connect(env.get('db.books.host'))

  logger.debug('connecting user db...')
  const usersDbConn = await mongoose.connect(env.get('db.users.host'))

  return {
    books: booksDbConn,
    users: usersDbConn,
  }
}