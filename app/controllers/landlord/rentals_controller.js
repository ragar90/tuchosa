const Rental = require('../models').rental;
const express = require('express')
const router = express.Router()
const route = '/rentals'

router.use(function (req, res, next) {
  if (req.params.id) {
    Rental
      .where({ id: req.params.id })
      .fetch()
      .then(function (rental) {
        req.mergedParams.currentRental = rental
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
  Rental
    .where({ landlord_id: landlordId })
    .fetchPage({ page: page, pageSize: pageSize })
    .then(function (rentals) {
      console.log(rentals);
      res.send(rentals.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties' })
    })
}

function create(req, res) {
  const rentalParams = request.mergedParams.rentalParams;
  Rental.forge(rentalParams)
    .save()
    .then(function (rental) {
      res.json(rental.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while Saving new property', error: error })
    })
}

function show(req, res) {
  const rental = req.mergedParams.currentRental
  res.send(rental.toJSON())
}

function update(req, res) {
  const requestedRental = req.mergedParams.currentRental
  const rentalParams = req.mergedParams.rentalParams
  requestedRental.set(rentalParams)
    .save()
    .then(function (rental) {
      res.json(rental.toJSON())
    })
    .catch(function (error) {
      console.log('Error on GET /properties ===> ', error);
      res.status(400).json({ error_message: 'Error while fetching properties', error: error })
    });
}

function destroy(req, res) {
  const requestedRental = req.mergedParams.currentRental
  requestedRental.set({ finished: true })
    .save()
    .then(function (rental) {
      res.json(rental.toJSON())
    })
}


router.get('/', index);// GET /rentals
router.post('/', create);// POST /rentals
router.get('/:id', show)// GET /rentals/:id
router.put(':/id', update)// PUT /rentals/:id
router.delete('/:id/finished', destroy);// DELETE /rentals/:id/finished

module.exports = {
  router: router,
  route: route
}
