
const amenitiesData = require('./seed_data/amenities');
const contractTypesData = require('./seed_data/contract_types')
const propertyTypesData = require('./seed_data/property_types');
const userTypesData = require('./seed_data/user_types');
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('amenities').del()
    .then(function () {
      return knex('contract_types').del()
    })
    .then(function () {
      return knex('property_types').del()
    })
    .then(function () {
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
      return knex('property_types').insert(propertyTypesData)
    })
    .then(function () {
      return knex('user_types').insert(userTypesData)
    })
};
