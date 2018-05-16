'use strict'

const logger = require('../utils/logger')
const repositoryClasses = require('../repositories')

// TODO unify repository interface
module.exports.setup = databases =>
  // FIXME handle empty set and filter undefined/malformed classes
  Object.values(repositoryClasses).reduce((acc, repositoryClass) => {
    const { classInstance, dbName } = repositoryClass
    return {
      [classInstance.name]: new classInstance(databases[dbName]),
      ...acc
    } 
  }, {})