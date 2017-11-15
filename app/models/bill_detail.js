var Bookshelf = require('../../config/bookshelf');

var BillDetail = Bookshelf.Model.extend({
  tableName: 'bill_details',
  hasTimestamps: true,
})

module.exports = BillDetail;