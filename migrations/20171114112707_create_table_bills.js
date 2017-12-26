
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('bills', function (table) {
    table.increments('id').primary();
    table.integer('rental_id');
    table.foreign('rental_id').references('rentals.id');
    table.integer('tenant_id');
    table.foreign('tenant_id').references('users.id');
    table.integer('state'); //Send: 0, Payed: 1, Overdue: 2
    table.decimal('subtotal');
    table.decimal('fee_amount');
    table.decimal('taxes');
    table.decimal('total');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bills')
};
