
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('rules', function (table) {
    table.increments('id');
    table.string('name');
    table.text('description');
    table.string('icon');
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  knex.schema.dropTableIfExists('rules')
};
