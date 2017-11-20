var Bookshelf = require('../../config/bookshelf');
var RentalAmenity = require('./rental_amenity')
var Amenity = Bookshelf.Model.extend({
  tableName: 'amenities',
  hasTimestamps: true,
  rentalAmenities: function () {
    return this.hasMany(Amenity);
  }
})

module.exports = Amenity;