'use strict'

const path = require('path')
const convict = require('convict')

const configSchema = require('./configSchema')

const config = convict(configSchema)
const env = config.get('env')

config.loadFile(path.join(__dirname, `./${env}.json`))
config.validate({ allowed: 'strict' })

module.exports = config

