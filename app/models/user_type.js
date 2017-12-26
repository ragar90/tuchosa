const Bookshelf = require('../../config/bookshelf');
const User = require('./user')

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

const UserType = Bookshelf.Model.extend({
  tableName: 'user_types',
  hasTimestamps: true,
  users: function () {
    return this.hasMany(User)
  }
})

module.exports = Bookshelf.model('UserType', UserType);