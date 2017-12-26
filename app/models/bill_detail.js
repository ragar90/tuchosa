const Bookshelf = require('../../config/bookshelf');
const Bill = require('./bill')

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

const BillDetail = Bookshelf.Model.extend({
  tableName: 'bill_details',
  hasTimestamps: true,
  bill: function () {
    return this.belongsTo(Bill);
  }
});

module.exports = Bookshelf.model('BillDetail', BillDetail);