const LandLord = require('../../models').landlord;
const loader = require('../../helpers/module_loader_helper')
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


router.get('/sign_in', create);// GET /sign_in
router.delete('/sign_out', destroy);// DELETE /sign_out

module.exports = loader.exportController(route, router);
