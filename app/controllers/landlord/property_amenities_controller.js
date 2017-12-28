const PropertyAmenity = require('../../models').property_amenity;
const loader = require('../../helpers/module_loader_helper')
const express = require('express')
const router = express.Router()
const route = '/property_amenities'

router.use(function (req, res, next) {
  if (req.params.id) {
    PropertyAmenity
      .where({ id: req.params.id })
      .fetch()
      .then(function (propertyAmenity) {
        req.mergedParams.currentPropertyAmenity = propertyAmenity
        next();
      });
  } else {
    next();
  }
});

/** Handlers */
function index(req, res) {
  const propertyId = req.mergedParams.propertyId;
  PropertyAmenity
    .where({ property_id: propertyId })
    .fetchAll({withRelated: ['amenity'] })
    .then(function (propertyRules) {
      console.log(propertyRules);
      res.send(propertyRules.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties' })
    })
}

function create(req, res) {
  const propertyAmenityParams = request.mergedParams.propertyAmenityParams;
  PropertyAmenity.forge(propertyAmenityParams)
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
  const requestedPropertyAmenity = req.mergedParams.currentPropertyAmenity
  res.send(requestedPropertyAmenity.toJSON())
}

function update(req, res) {
  const requestedPropertyAmenity = req.mergedParams.currentPropertyAmenity
  const propertyAmenityParams = req.mergedParams.propertyAmenityParams
  requestedPropertyAmenity.set(propertyAmenityParams)
    .save()
    .then(function (propertyAmenity) {
      res.json(propertyAmenity.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties', error: error })
    });
}

function destroy(req, res) {
  const requestedPropertyAmenity = req.mergedParams.currentPropertyAmenity
  requestedPropertyAmenity.destroy()
    .then(function (propertyAmenity) {
      res.json(propertyAmenity.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties', error: error })
    })
}

/** Routes */
router.get('/', index);// GET /property_amenities
router.post('/', create);// POST /property_amenities
router.get('/:id', show)// GET /property_amenities/:id
router.put(':/id', update)// PUT /property_amenities/:id
router.delete('/:id', destroy);// DELETE /property_amenities/:id/

module.exports = loader.exportController(route, router);
