'use strict'

const logger = require('../utils/logger')
const repositoryClasses = require('../repositories')

// TODO unify repository interface
module.exports.setup = databases =>
  // FIXME handle empty set and filter undefined/malformed classes
  Object.values(repositoryClasses).reduce((acc, repositoryClass) => ({
    [repositoryClass.name]: new repositoryClass(databases),
    ...acc
  }), {})