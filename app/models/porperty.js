const Bookshelf = require('../../config/bookshelf');
const PropertyType = require('./property_type');
const Rental = require('./rental');
const Landlord = require('./landlord');
const PropertyRules = require('./property_rule');
const PropertyAmenity = require('./property_amenity');
const Amenity = require('./amenity');

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

const Property = Bookshelf.Model.extend({
  tableName: 'properties',
  hasTimestamps: true,
  propertyType: function () {
    return this.belongsTo(PropertyType)
  },
  landlord: function () {
    return this.belongsTo(Landlord)
  },
  propertyRules: function () {
    return this.hasMany(PropertyRules)
  },
  propertyAmenities: function () {
    return this.hasMany(PropertyAmenity)
  },
  amenity: function () {
    return this.hasMany(Amenity).through(PropertyAmenity)
  },
  rentals: function () {
    return this.hasMany(Rental);
  }
})

module.exports = Bookshelf.model('Property', Property);