
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('rentals', function (table) {
    table.increments('id').primary();
    table.integer('tenant_id');
    table.integer('landlord_id');
    table.boolean('vacant').defaultTo(true);;
    table.boolean('required_gender');
    table.string('contract_document_url');
    table.boolean('finished').defaultTo(false);
    table.foreign('landlord_id').references('landlords.id');
    table.integer('contract_type_id').references('contract_types.id');
    table.integer('property_id').references('properties.id')
    table.foreign('tenant_id').references('users.id');
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('rentals')
};