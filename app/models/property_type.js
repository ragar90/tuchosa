const Bookshelf = require('../../config/bookshelf');
const Property = require('./property');

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

var PropertyType = Bookshelf.Model.extend({
  tableName: 'property_types',
  hasTimestamps: true,
  properties: function () {
    return this.hasMany(Property);
  }
})

module.exports = Bookshelf.model('PropertyType', PropertyType);