
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('services', function (table) {
    table.increments('id');
    table.string('name');
    table.text('description');
    table.boolean('included');
    table.decimal('extra_charge');
    table.string('icon');
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  knex.schema.dropTableIfExists('services')
};
