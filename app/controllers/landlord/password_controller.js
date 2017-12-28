const LandLord = require('../../models').landlord;
const loader = require('../../helpers/module_loader_helper');
const mailer = require('../../integrations/mailer')
const express = require('express')
const router = express.Router()
const route = '/password'

// TODO: Add method for returning complete URL
function send_reset_email(req, res) {
  const email = req.mergedParams.email;
  LandLord.forge()
    .where({email: email})
    .fetch()
    .then(landlord => {
      return landlord.resetPassowordToken();
    })
    .then((landlord) => {
      return new Promise((resolve, reject) => {
        const resetPassowordLink = 'https://www.google.com?token=' + landlord.get('reset_password_token');
        mailer.renderEmailTemplate('password_reset', { reset_password_link: resetPassowordLink })
          .then((template) => {
            const emailData = {
              email: landlord.get('email'),
              template: template,
              subeject: 'Here is Your Password Reset Link'
            }
            resolve(emailData)
          })
      });
    })
    .then((emailData) => {
      mailer.sendEmail(emailData.email, emailData.subeject, emailData.template)
    })
}

function reset_password(req, res) {
  const token = req.mergedParams.token;
  const password = req.mergedParams.password;
  const passwordConfirmation = req.mergedParams.password_confirmation;
  LandLord.forge()
    .where({ reset_password_token: token })
    .fetch()
    .then((landlord) => {
      return landlord.encryptAndSavePassword(password, passwordConfirmation)
    })
    .then((landlord) => {
      res.json({message: 'Passoword reseted successfully'})
    })
    .catch((error) => {
      res.status(400).json({message: error})
    })
}

function password_reset_form(req, res) {
  const token = req.mergedParams.token;
  LandLord.forge()
    .where({ reset_password_token: token })
    .fetch()
    .then((landlord) => {
      res.render('password_reset_form', { reset_password_token: token }, (err, html) => {
        res.send(html);
      });
    })
    .catch((error) => {
      res.status(400).json({ message: error })
    })
}

router.post('/send_reset_email', send_reset_email);// POST /send_reset_email
router.post('/reset_password', reset_password);// POST /reset_password
router.get('/reset_password', password_reset_form);// GET /reset_password

module.exports = loader.exportController(route, router);
