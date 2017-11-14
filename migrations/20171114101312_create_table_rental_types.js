
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('rental_types', function (table) {
    table.increments('id');
    table.string('name');
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  knex.schema.dropTableIfExists('rental_types')
};
