
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('rentals', function (table) {
    table.increments('id').primary();
    table.integer('owner_id');
    table.foreign('owner_id').references('users.id');
    table.integer('manager_id');
    table.foreign('manager_id').references('users.id');
    table.integer('tenant_id');
    table.foreign('tenant_id').references('users.id');
    table.integer('rental_type_id').references('rental_types.id');
    table.integer('contract_type_id').references('contract_types.id');
    table.string('name');
    table.text('address')
    table.decimal('latitude');
    table.decimal('longitude');
    table.decimal('price');
    table.decimal('deposit');
    table.integer('total_rooms')
    table.integer('total_bathrooms')
    table.boolean('share_bathroom')
    table.boolean('deposit_return_policy')
    table.string('picture_1_url')
    table.string('picture_2_url')
    table.string('picture_3_url')
    table.string('picture_4_url')
    table.string('picture_5_url')
    table.boolean('vacant')
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('rentals')
};