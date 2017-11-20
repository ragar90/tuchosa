
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('properties', function (table) {
    table.increments('id').primary();
    table.integer('property_type_id').references('property_types.id')
    table.integer('total_rooms')
    table.integer('total_bathrooms')
    table.boolean('share_bathroom')
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  
};

