const factory = require('factory-girl').factory;
const User = require('../models/user');

factory.define('user', User, {
  username: 'Bob',
  score: 50,
});

module.exports = factory