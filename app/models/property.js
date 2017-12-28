const Bookshelf = require('../../config/bookshelf');
const PropertyType = require('./property_type');
const Rental = require('./rental');
const Landlord = require('./landlord');
const PropertyRules = require('./property_rule');
const PropertyAmenity = require('./property_amenity');
const Amenity = require('./amenity');
const validator = require('validator');
const _ = require('lodash')
const validStates = [0, 1, 2, 3];

validator.isRequired = function (val) {
  return val != null;
}

validator.hasAValidState = function (val) {
  return _.filter(validStates, function (validState) {
    return validState === val
  }) > 0
}

const validatorConfig = {
  validator: validator, // node-validator
  validateOnSave: true // Automatically validate when Bookshelf emits 'saving' event
}

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');
Bookshelf.plugin('bookshelf-validate', validatorConfig);

const Property = Bookshelf.Model.extend({
  tableName: 'properties',
  hasTimestamps: true,
  validations: {
    landlord_id: 'isRequired',
    manager_id: 'isRequired',
    property_type_id: 'isRequired',
    name: 'isRequired',
    address: 'isRequired',
    latitude: 'isRequired',
    longitude: 'isRequired',
    dimensions_metters: 'isRequired',
    monthly_price: 'isRequired',
    deposit: 'isRequired',
    state: {
      isRequired: true,
      hasAValidState: true
    }
  },
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