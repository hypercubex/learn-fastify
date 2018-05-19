'use strict'

const server = require('./server')

server.setup().then(server.start)