
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('amenities', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.text('description');
    table.string('icon');
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('amenities')
};
