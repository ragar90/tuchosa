const Property = require('../models').property;
const PropertyRule = require('../models').property_rule;
const express = require('express')
const router = express.Router()
const route = '/property_rules'


const Property = require('../models/properties.js');
const express = require('express')
const router = express.Router()
const route = '/properties'

router.use(function (req, res, next) {
  if (req.params.id) {
    PropertyRule
      .where({ id: req.mergedParams.id })
      .then(function (propertyRule) {
        req.mergedParams.currentPropertyRule = propertyRule
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
  const propertyId = req.mergedParams.propertyId;
  PropertyRule
    .where({ property_id: propertyId })
    .fetchPage({ page: page, pageSize: pageSize })
    .then(function (propertyRules) {
      console.log(propertyRules);
      res.send(propertyRules.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties' })
    })
}
router.get('/', index);

// POST /properties
function create(req, res) {
  const propertyRuleParams = request.mergedParams.propertyRuleParams;
  Property.forge(propertyData)
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
  const requestedPropertyRule = req.mergedParams.currentProperty
  res.send(requestedPropertyRulerty.toJSON())
}
router.get('/:id', show)

// PUT /properties/:id
function update(req, res) {
  const requestedPropertyRule = req.mergedParams.currentPropertyRule
  const propertyRuleParams = req.mergedParams.propertyRuleParams
  requestedPropertyRule.set(propertyRuleParams)
    .save()
    .then(function (propertyRule) {
      res.json(propertyRule.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties', error: error })
    });
}
router.put(':/id', update)

// DELETE /properties/:id/disable
function destroy(req, res) {
  const requestedPropertyRule = req.mergedParams.currentPropertyRule
  requestedPropertyRule.destroy()
    .then(function (property) {
      res.json(property.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties', error: error })
    })
}
router.delete('/:id/disable', destroy);

module.exports = {
  router: router,
  route: route
}
