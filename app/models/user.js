const Bookshelf = require('../../config/bookshelf');
const Rental = require('./rental')
const UserType = require('./user_type')

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

const User = Bookshelf.Model.extend({
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

module.exports = Bookshelf.model('User', User);