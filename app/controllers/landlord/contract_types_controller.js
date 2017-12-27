const ContractType = require('../models').contract_type;
const express = require('express')
const router = express.Router()
const route = '/contract_types'

function index(req, res) {
  ContractType
    .fetchAll()
    .then(function (contractTypes) {
      console.log(contractTypes);
      res.send(contractTypes.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties' })
    })
}

router.get('/', index);// GET /contract_types

module.exports = {
  router: router,
  route: route
}
