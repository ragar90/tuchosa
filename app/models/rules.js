var Bookshelf = require('../../config/bookshelf');

var Rule = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
})

module.exports = Rule;