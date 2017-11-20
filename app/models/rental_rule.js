var Bookshelf = require('../../config/bookshelf');
var Rental = require('./rental');

var RentalRule = Bookshelf.Model.extend({
  tableName: 'bill_details',
  hasTimestamps: true,
  rental: function () {
    return this.belongsTo(Rental)
  }

})

module.exports = RentalRule;