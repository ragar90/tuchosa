
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('rental_rules', function (table) {
    table.increments('id').primary();
    table.integer('rental_id');
    table.foreign('rental_id').references('rentals.id');
    table.text('description');
    table.decimal('penalty')
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('rental_rules')
};
