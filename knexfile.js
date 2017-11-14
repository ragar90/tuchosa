var config = require('./config')
console.log('===> Connecting to: ', config.DATABASE_URL)
var defaultOptions = {
  client: 'postgresql',
  connection: config.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}

module.exports = {
  test: defaultOptions,
  development: defaultOptions,
  staging: defaultOptions,
  production: defaultOptions,
  local: defaultOptions
}