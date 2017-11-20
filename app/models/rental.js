const Bookshelf = require('../../config/bookshelf');
const RentalType = require('./rental_type');
const ContractType = require('./contract_type');
const Bill = require('./bill');
const RentalRule = require('./rental_rule');
const Property = require('./property');

var Rental = Bookshelf.Model.extend({
  tableName: 'rentals',
  hasTimestamps: true,
  owner: function () {
    return this.belongsTo(User);
  },
  manager: function () {
    return this.belongsTo(User);
  },
  tenant: function () {
    return this.belongsTo(User);
  },
  property: function () {
    return this.belongsTo(Property);
  },
  contractType: function () {
    return this.belongsTo(ContractType)
  },
  bills: function () {
    return this.hasMany(Bill)
  },
  rentalRules: function () {
    return this.hasMany(RentalRule)
  },
  rentalAmenities: function () {
    return this.hasMany(RentalAmenity)
  }
})

module.exports = Rental;