'use strict'

const logger = require('../utils/logger')
const servicesClasses = require('../services')

module.exports.setup = repositories =>
  // FIXME filter undefined/malformed classes
  Object.values(servicesClasses).reduce((acc, serviceClass) => {
    logger.debug(`registering service: ${serviceClass.name}...`)
    return {
      [serviceClass.name]: new serviceClass(repositories),
      ...acc
    }
  }, {})