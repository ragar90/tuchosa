var Bookshelf = require('../../config/bookshelf');

var Tag = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
})

module.exports = Tag;