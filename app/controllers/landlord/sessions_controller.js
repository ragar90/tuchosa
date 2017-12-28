const LandLord = require('../models').landlord;
const express = require('express')
const router = express.Router()
const route = '/'


function create(req, res) {
  const email = req.mergeParams.auth.email;
  const password = req.mergeParams.auth.password;
  LandLord.authenticate(email, password)
    .then((landlord) => {
      res.json({session_token: landlord.get('session_token')});
    })
    .catch((error) => {
      res.status(400).json({error_message: error});
    })
}

function destroy(req, res) {
  const currentLandLord = req.mergeParams.currentLandLord;
  currentLandLord.singOut()
    .then((landlord) => {
      res.json({message: 'Session closed'})
    })
    .catch((error) => {
      res.status(400).json({ message: 'Session closed' })
    })
}


router.get('/sign_in', index);// GET /sign_in
router.delete('/sign_out', index);// DELETE /sign_out

module.exports = {
  router: router,
  route: route
}
