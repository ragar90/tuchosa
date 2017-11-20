
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('rentals', function (table) {
    table.increments('id').primary();
    table.integer('owner_id');
    table.foreign('owner_id').references('users.id');
    table.integer('manager_id');
    table.foreign('manager_id').references('users.id');
    table.integer('tenant_id');
    table.foreign('tenant_id').references('users.id');
    table.integer('contract_type_id').references('contract_types.id');
    table.integer('property_id').references('properties.id')
    table.string('name');
    table.text('address')
    table.decimal('latitude');
    table.decimal('longitude');
    table.decimal('price');
    table.decimal('deposit');
    table.boolean('deposit_return_policy')
    table.string('picture_1_url')
    table.string('picture_2_url')
    table.string('picture_3_url')
    table.string('picture_4_url')
    table.string('picture_5_url')
    table.boolean('vacant')
    table.boolean('required_gender')
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('rentals')
};