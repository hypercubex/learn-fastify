'use strict'

const { Schema } = require('mongoose')

const Authors = require('./Authors')

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  authors: [Authors.schema]
})

module.exports = {
  modelName: 'Books',
  collectionName: 'books',
  schema
}
