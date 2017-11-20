var Bookshelf = require('../../config/bookshelf');
var User = require('./user')
var UserType = Bookshelf.Model.extend({
  tableName: 'user_types',
  hasTimestamps: true,
  users: function () {
    return this.hasMany(User)
  }
})

module.exports = UserType;