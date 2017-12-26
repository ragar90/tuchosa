
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('bill_details', function (table) {
    table.increments('id').primary();
    table.integer('bill_id');
    table.foreign('bill_id').references('bills.id');
    table.text('description');
    table.integer('unit');
    table.decimal('subtotal');
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('bill_details')
};
