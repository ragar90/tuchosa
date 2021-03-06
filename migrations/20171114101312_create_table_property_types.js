
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('property_types', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('property_types')
};
