const Property = require('../models/properties.js');
const express = require('express')
const router = express.Router()
const route = '/properties'

router.use(function (req, res, next) {
  if (req.mergedParams.id) {
    Property
      .where({ id: req.mergedParams.id })
      .then(function (property) {
        req.mergedParams.currentProperty = property
        next();
      });
  } else {
    next();
  }
  
});

// GET /properties
function index(req, res) {
  const page = req.mergedParams.page || 1;
  const pageSize = 10;
  const landlordId = req.mergedParams.landlordId;
  Property
    .where({ landlord_id: landlordId})
    .fetchPage({page: page, pageSize: pageSize})
    .then(function (properties) {
      console.log(properties);
      res.send(properties.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({error_message: 'Error while fetching properties'})
    })
}
router.get('/', index);

// POST /properties
function create(req, res) {
  const propertyParams = request.mergedParams.propertyParams;
  Property.forge(propertyParams)
    .save()
    .then(function (property) {
      res.json(property.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while Saving new property', error: error })
    })
}
router.post('/', create);

// GET /properties/:id
function show(req, res) {
  const property = req.mergedParams.currentProperty
  res.send(property.toJSON())
}
router.get('/:id', show)

// PUT /properties/:id
function update(req, res) {
  const property = req.mergedParams.currentProperty
  const propertyParams = req.mergedParams.propertyParams
  property.set(propertyParams)
    .save()
    .then(function (property) {
      res.json(property.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties', error: error})
    });
}
router.put(':/id', update)

// DELETE /properties/:id/disable
function destroy(req, res) {
  const requestedProperty = req.mergedParams.currentProperty
  requestedProperty.set({state: 0})
    .save()
    .then(function (property) {
      res.json(property.toJSON())
    })
}
router.delete('/:id/disable', destroy);

module.exports = {
  router: router,
  route: route
}
