var Bookshelf = require('../../config/bookshelf');
var Bill = require('./bill')
var BillDetail = Bookshelf.Model.extend({
  tableName: 'bill_details',
  hasTimestamps: true,
  bill: function () {
    return this.belongsTo(Bill);
  }
})

module.exports = BillDetail;