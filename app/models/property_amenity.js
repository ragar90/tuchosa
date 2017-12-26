const Bookshelf = require('../../config/bookshelf');
const Property = require('./property');
const Amenity = require('./amenity');

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

const PropertyAmenity = Bookshelf.Model.extend({
  tableName: 'rental_amenities',
  hasTimestamps: true,
  amenity: function () {
    return this.belongsTo(Amenity)
  },
  property: function () {
    return this.belongsTo(Property)
  }
})

module.exports = Bookshelf.model('PropertyAmenity', PropertyAmenity);