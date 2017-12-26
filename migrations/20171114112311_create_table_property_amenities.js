
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('property_amenities', function (table) {
    table.increments('id').primary();
    table.integer('property_id');
    table.foreign('property_id').references('properties.id');
    table.integer('amenity_id');
    table.foreign('amenity_id').references('amenities.id');
    table.string('name');
    table.text('description');
    table.boolean('optional');
    table.decimal('extra_charge');
    table.string('icon');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rental_amenities')
};
