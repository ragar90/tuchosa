const Bookshelf = require('../../config/bookshelf');
const Property = require('./property');

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

const RentalRule = Bookshelf.Model.extend({
  tableName: 'property_rules',
  hasTimestamps: true,
  property: function () {
    return this.belongsTo(Property)
  }

})

module.exports = Bookshelf.model('RentalRule', RentalRule);