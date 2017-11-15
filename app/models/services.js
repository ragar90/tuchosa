var Bookshelf = require('../../config/bookshelf');

var Service = Bookshelf.Model.extend({
  tableName: 'services',
  hasTimestamps: true,
})

module.exports = Service;