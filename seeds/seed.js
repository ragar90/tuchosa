
const amenitiesData = require('./seed_data/amenities');
const contractTypesData = require('./seed_data/contract_types')
const rentalTypes = require('./seed_data/rental_types');
const userTypes = require('./seed_data/user_types');
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('amenities').del()
    .then(function () {
      return knex('contract_types').del()
    })
    .then(function () {
      return knex('rental_types').del()
    })
    .them(function () {
      return knex('user_types').del()
    })
    .then(function () {
      // Inserts seed entries
      return knex('amenities').insert(amenitiesData);
    })
    .then(function () {
      return knex('contract_types').insert(contractTypesData);
    })
    .then(function () {
      return knex('rental_types').insert(rentalTypes)
    })
    .then(function () {
      return knex(user_types).insert(userTypes)
    })
};
