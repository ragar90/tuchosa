
exports.up = function (knex, Promise) {
  knex.schema.createTableIfNotExists('rental_rules', function (table) {
    table.increments('id');
    table.integer('rental_id');
    table.text('rule_id');
    table.timestamps();
  })
};

exports.down = function (knex, Promise) {
  knex.schema.dropTableIfExists('rental_rules')
};
