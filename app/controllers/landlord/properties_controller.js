const Property = require('../models').property;
const express = require('express')
const router = express.Router()
const route = '/properties'

router.use(function (req, res, next) {
  if (req.params.id) {
    Property
      .where({ id: req.params.id })
      .then(function (property) {
        req.mergedParams.currentProperty = property
        next();
      });
  } else {
    next();
  }
  
});

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

function show(req, res) {
  const property = req.mergedParams.currentProperty
  res.send(property.toJSON())
}

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

function destroy(req, res) {
  const requestedProperty = req.mergedParams.currentProperty
  requestedProperty.set({state: 0})
    .save()
    .then(function (property) {
      res.json(property.toJSON())
    })
}


router.get('/', index);// GET /properties
router.post('/', create);// POST /properties
router.get('/:id', show)// GET /properties/:id
router.put(':/id', update)// PUT /properties/:id
router.delete('/:id/disable', destroy);// DELETE /properties/:id/disable

module.exports = {
  router: router,
  route: route
}
