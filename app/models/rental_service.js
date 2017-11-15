var Bookshelf = require('../../config/bookshelf');

var RentalServie = Bookshelf.Model.extend({
  tableName: 'bill_details',
  hasTimestamps: true,
})

module.exports = RentalServie;