const Bookshelf = require('../../config/bookshelf');
const RentalType = require('./rental_type');
const ContractType = require('./contract_type');
const Bill = require('./bill');
const RentalRule = require('./rental_rule');
const Property = require('./property');

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

const Rental = Bookshelf.Model.extend({
  tableName: 'rentals',
  hasTimestamps: true,
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
  }
})

module.exports = Bookshelf.model('Rental', Rental);