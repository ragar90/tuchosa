
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('bills', function (table) {
    table.increments('id');
    table.integer('rental_id');
    table.text('user_id');
    table.integer('state');
    table.decimal('subtotal');
    table.decimal('fee_amount');
    table.decimal('taxes');
    table.decimal('total');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('bills')
};
