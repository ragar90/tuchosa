const LandLord = require('../../models').landlord;
const loader = require('../../helpers/module_loader_helper');
const mailer = require('../../integrations/mailer')
const express = require('express')
const router = express.Router()
const route = '/password'

function sign_up(req, res) {
  const landlordParams = request.mergedParams.landlordParams;
  LandLord.forge(landlordParams)
    .save()
    .then(function (landlord) {
      res.json(landlord.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /sign_up ===> ', error);
      res.status(400).json({ error_message: 'Error while Creating new landlord account', error: error })
    })
}


router.post('/signup', sign_up);// POST /send_reset_email

module.exports = loader.exportController(route, router);
