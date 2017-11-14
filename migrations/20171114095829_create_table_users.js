
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.string('encrypted_password');
    table.string('reset_password_token');
    table.string('reset_password_sent_at');
    table.string('remember_created_at');
    table.string('sign_in_count');
    table.string('current_sign_in_at');
    table.string('last_sign_in_at');
    table.string('current_sign_in_ip');
    table.string('last_sign_in_ip');
    table.string('session_token');
    table.string('session_token_last_sign_in');
    table.string('picture_url');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('users')
};
