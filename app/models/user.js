var Bookshelf = require('../../config/bookshelf');
var Rental = require('./rental')
var UserType = require('./user_type')
var User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  ownRentals: function () {
    return this.hasMany(Rental)
  },
  manageRentals: function () {
    return this.hasMany(Rental)
  },
  tenantRental: function () {
    return this.hasOne(Rental)
  },
  userType: function () {
    return this.belongsTo(UserType)
  }
})

module.exports = User;