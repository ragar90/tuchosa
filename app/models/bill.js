const Bookshelf = require('../../config/bookshelf');
const Rental = require('./rental');
const BillDetail = require('./bill_detail');
const User = require('./user');

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

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

module.exports = Bookshelf.model('Bill', Bill);