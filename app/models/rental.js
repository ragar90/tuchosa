var Bookshelf = require('../../config/bookshelf');

var Rental = Bookshelf.Model.extend({
  tableName: 'rentals',
  hasTimestamps: true,
})

module.exports = Rental;