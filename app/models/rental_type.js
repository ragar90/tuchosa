var Bookshelf = require('../../config/bookshelf');

var RentalType = Bookshelf.Model.extend({
  tableName: 'rental_types',
  hasTimestamps: true,
})

module.exports = RentalType;