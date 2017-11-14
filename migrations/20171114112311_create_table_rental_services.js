
exports.up = function (knex, Promise) {
  knex.schema.createTableIfNotExists('rental_services', function (table) {
    table.increments('id');
    table.integer('rental_id');
    table.text('service_id');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('rental_services')
};
