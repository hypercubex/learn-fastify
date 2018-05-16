'use strict'

const { Schema } = require('mongoose')

const schema = new Schema({
  groupName: {
    type: String,
    required: true
  }
})

module.exports = {
  modelName: 'Groups',
  collectionName: 'groups',
  schema
}
