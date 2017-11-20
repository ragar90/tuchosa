var Bookshelf = require('../../config/bookshelf');
var Rental = require('./rental')

var ContractType = Bookshelf.Model.extend({
  tableName: 'contract_types',
  hasTimestamps: true,
  rentals: function () {
    return this.hasMany(Rental);
  }
})

module.exports = ContractType;