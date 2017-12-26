
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('properties', function (table) {
    table.increments('id').primary();
    table.integer('manager_id');
    table.integer('owner_id');
    table.foreign('manager_id').references('users.id');
    table.foreign('owner_id').references('landlords.id');
    table.integer('property_type_id').references('property_types.id');
    table.integer('state');// Unavaliable: 0, Vacant: 1, Reserved: 2, Rented: 3 
    table.string('name');
    table.text('address')
    table.decimal('latitude');
    table.decimal('longitude');
    table.integer('total_rooms');
    table.integer('total_bathrooms');
    table.boolean('share_bathroom');
    table.decimal('dimensions_metters'); // Square metters of area
    table.decimal('monthly_price');
    table.decimal('deposit');
    table.boolean('deposit_return_policy')
    table.string('picture_1_url');
    table.string('picture_2_url');
    table.string('picture_3_url');
    table.string('picture_4_url');
    table.string('picture_5_url');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  
};

