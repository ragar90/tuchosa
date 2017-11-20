const Bookshelf = require('../../config/bookshelf');
const PropertyType = require('./property_type')
const Rental = require('./rental')


var Property = Bookshelf.Model.extend({
  tableName: 'properties',
  hasTimestamps: true,
  propertyType: function () {
    return this.belongsTo(PropertyType)
  },
  rentals: function () {
    return this.hasMany(Rental);
  }
})

module.exports = Property;