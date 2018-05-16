'use strict'

const { Schema } = require('mongoose')

const schema = new Schema({
  username: {
    type: String,
    required: true
  }
})

module.exports = {
  modelName: 'Users',
  collectionName: 'users',
  schema
}
