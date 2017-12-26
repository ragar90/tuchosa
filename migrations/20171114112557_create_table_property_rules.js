
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('property_rules', function (table) {
    table.increments('id').primary();
    table.integer('property_id');
    table.foreign('property_id').references('properties.id');
    table.text('description');
    table.decimal('penalty')
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('rental_rules')
};
