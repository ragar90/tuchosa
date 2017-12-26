const Bookshelf = require('../../config/bookshelf');
const Rental = require('./rental')

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

const ContractType = Bookshelf.Model.extend({
  tableName: 'contract_types',
  hasTimestamps: true,
  rentals: function () {
    return this.hasMany(Rental);
  }
})

module.exports = Bookshelf.model('ContractType', ContractType);