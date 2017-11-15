var Bookshelf = require('../../config/bookshelf');

var RentalRule = Bookshelf.Model.extend({
  tableName: 'bill_details',
  hasTimestamps: true,
})

module.exports = RentalRule;