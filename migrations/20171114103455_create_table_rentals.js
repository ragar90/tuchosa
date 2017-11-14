
exports.up = function (knex, Promise) {
  knex.schema.createTableIfNotExists('rentals', function (table) {
    table.increments('id');
    table.string('name');
    table.integer('rental_type_id');
    table.integer('contract_type_id');
    table.text('address')
    table.decimal('latitude');
    table.decimal('longitude');
    table.decimal('price');
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  knex.schema.dropTableIfExists('rentals')
};