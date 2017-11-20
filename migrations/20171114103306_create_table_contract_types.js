
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('contract_types', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.text('description');
    table.integer('duration'); // in Months
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contract_types')
};
