const PropertyRule = require('../models').property_rule;
const express = require('express')
const router = express.Router()
const route = '/property_rules'

router.use(function (req, res, next) {
  if (req.params.id) {
    PropertyRule
      .where({ id: req.params.id })
      .fetch()
      .then(function (propertyRule) {
        req.mergedParams.currentPropertyRule = propertyRule
        next();
      });
  } else {
    next();
  }
});

/** Handlers */
function index(req, res) {
  const propertyId = req.mergedParams.propertyId;
  PropertyRule
    .where({ property_id: propertyId })
    .fetchAll()
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
  const propertyRuleParams = request.mergedParams.propertyRuleParams;
  PropertyRule.forge(propertyRuleParams)
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
  const requestedPropertyRule = req.mergedParams.currentPropertyRule
  res.send(requestedPropertyRulerty.toJSON())
}

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

/** Routes */
router.get('/', index);// GET /property_rules
router.post('/', create);// POST /property_rules
router.get('/:id', show)// GET /property_rules/:id
router.put('/:id', update)// PUT /property_rules/:id
router.delete('/:id', destroy);// DELETE /property_rules/

module.exports = {
  router: router,
  route: route
}
