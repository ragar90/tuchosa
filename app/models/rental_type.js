var Bookshelf = require('../../config/bookshelf');
var Rental = require('./rental')

var RentalType = Bookshelf.Model.extend({
  tableName: 'rental_types',
  hasTimestamps: true,
  rentals: function () {
    return this.hasMany(Rental);
  }
})

module.exports = RentalType;