const PropertyType = require('../models').property_type;
const express = require('express')
const router = express.Router()
const route = '/property_types'


function index(req, res) {
  PropertyType
    .fetchAll()
    .then(function (propertyTypes) {
      console.log(propertyTypes);
      res.send(propertyTypes.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties' })
    })
}

router.get('/', index);// GET /property_types

module.exports = {
  router: router,
  route: route
}
