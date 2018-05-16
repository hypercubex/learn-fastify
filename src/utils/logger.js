'use strict'

const pino = require('pino')
const env = require('../config/env')

module.exports = pino({
    level: env.get('logLevel'),
    prettyPrint: env.get('env') !== 'production'
})