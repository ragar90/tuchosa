var Bookshelf = require('../../config/bookshelf');

var User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
})

module.exports = User;