'use strict'

const { Schema } = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = {
  modelName: 'Publishers',
  collectionName: 'publishers',
  schema
}
