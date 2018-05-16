'use strict'

// TODO check if can write as plugin
// TODO add assertions
class ContextManager {
  setContext(context) {
    if (this.context) {
      return
    }
    this.context = context
    this.databases = {}
    this.repositories = {}
  }

  getContext() { return this.context }

  getDatabase(name) { return this.databases[name] }
  setDatabase(name, database) { this.databases[name] = database }
  getDatabases() { return this.databases }
  setDatabases(databases) { this.databases = databases }

  getRepository(name) { return this.repositories[name] }
  setRepository(name, instance) { this.repositories[name] = instance }

  
}

module.exports = new ContextManager()