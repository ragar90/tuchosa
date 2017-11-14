
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('bill_details', function (table) {
    table.increments('id');
    table.integer('rental_id');
    table.text('description');
    table.integer('unit');
    table.decimal('subtotal');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  
};
