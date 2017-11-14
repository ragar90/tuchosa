
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('contract_types', function (table) {
    table.increments('id');
    table.string('name');
    table.text('description');
    table.integer('duration'); // in Months
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('rentals')
};
