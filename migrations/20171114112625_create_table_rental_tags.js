
exports.up = function (knex, Promise) {
  knex.schema.createTableIfNotExists('rental_tags', function (table) {
    table.increments('id');
    table.integer('rental_id');
    table.text('tag_id');
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  knex.schema.dropTableIfExists('rental_tags')
};
