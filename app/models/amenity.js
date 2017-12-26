const Bookshelf = require('../../config/bookshelf');
const RentalAmenity = require('./rental_amenity')

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

const Amenity = Bookshelf.Model.extend({
  tableName: 'amenities',
  hasTimestamps: true,
  rentalAmenities: function () {
    return this.hasMany(Amenity);
  }
})

module.exports = Bookshelf.model('Amenity', Amenity);