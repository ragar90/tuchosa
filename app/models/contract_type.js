var Bookshelf = require('../../config/bookshelf');

var ContractType = Bookshelf.Model.extend({
  tableName: 'contract_types',
  hasTimestamps: true,
})

module.exports = ContractType;