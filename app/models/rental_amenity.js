var Bookshelf = require('../../config/bookshelf');
var Rental = require('./rental');
var Amenity = require('./amenity')
var RentalAmenity = Bookshelf.Model.extend({
  tableName: 'rental_amenities',
  hasTimestamps: true,
  amenity: function () {
    return this.belongsTo(Amenity)
  },
  rental: function () {
    return this.belongsTo(Rental)
  }
})

module.exports = RentalAmenity;