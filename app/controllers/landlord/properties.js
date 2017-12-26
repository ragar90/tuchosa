const Property = require('../models/properties.js');
const express = require('express')
const router = express.Router()
const route = '/cargos'

// GET /properties
function index(req, res) {
  const page = req.mergedParams.page || 1;
  const pageSize = 10;
}
router.get('/', index);

module.exports = {
  router: router,
  route: route
}
