const Amenity = require('../models').amenity;
const express = require('express')
const router = express.Router()
const route = '/amenities'


function index(req, res) {
  Amenity
    .fetchAll()
    .then(function (amenities) {
      console.log(amenities);
      res.send(amenities.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties' })
    })
}

router.get('/', index);// GET /amenities

module.exports = {
  router: router,
  route: route
}
