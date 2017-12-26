const Bookshelf = require('../../config/bookshelf');
const Property = require('./property')

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

const LandLord = Bookshelf.Model.extend({
  tableName: 'landlords',
  hasTimestamps: true,
  properties: function () {
    return this.hasMany(Rental);
  }
})

module.exports = Bookshelf.model('LandLord', LandLord);