var Bookshelf = require('../../config/bookshelf');

var Bill = Bookshelf.Model.extend({
  tableName: 'bill_details',
  hasTimestamps: true,
})

module.exports = Bill;