const mustache = require('mustache');
const fs = require('fs');
const path = require('path');

function sendEmail(email, subject, body) {
  // TODO: Implement logic to hookup with transactional email provider
  console.log('THIS METHOD IS NOT IMPLEMENTED YET, PLEASE USE ANY SERVICE TO INTEGRATE MAILING')
}

function renderEmailTemplate(templateName, data) {
  const templatePath = path.join(process.cwd(), '/app/views/emails/', templateName, '.html');
  return fs.readFile(templatePath)
  .then(file => {
    return new Promise((resolve, reject) => {
      resolve(mustache.render(file, data))
    })
  });
}

module.exports = {
  sendEmail: sendEmail,
  renderEmailTemplate: renderEmailTemplate
}