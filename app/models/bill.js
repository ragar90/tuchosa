const Bookshelf = require('../../config/bookshelf');
const Rental = require('./rentals');
const BillDetail = require('./bill_detail');
const User = require('./user')
const Bill = Bookshelf.Model.extend({
  tableName: 'bill_details',
  hasTimestamps: true,
  rental: function () {
    return this.belongsTo(Rental);
  },
  tenant: function () {
    return this.belongsTo(User)
  },
  billDetails: function () {
    return this.hasMany(BillDetail)
  }
})

module.exports = Bill;