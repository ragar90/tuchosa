var config = require('../../config')
var knex = require('knex')({
  client: 'pg',
  connection: config.DATABASE_URL,
  searchPath: 'knex,public'
});

module.exports = knex