var Bookshelf = require('../../config/bookshelf');

var RentalTag = Bookshelf.Model.extend({
  tableName: 'bill_details',
  hasTimestamps: true,
})

module.exports = RentalTag;