
exports.up = function (knex, Promise) {
  knex.schema.createTableIfNotExists('tags', function (table) {
    table.increments('id');
    table.string('name');
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  knex.schema.dropTableIfExists('tags')
};
