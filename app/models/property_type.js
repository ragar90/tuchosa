var Bookshelf = require('../../config/bookshelf');
var Property = require('./property')

var PropertyType = Bookshelf.Model.extend({
  tableName: 'property_types',
  hasTimestamps: true,
  properties: function () {
    return this.hasMany(Property);
  }
})

module.exports = PropertyType;