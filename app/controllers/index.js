const fs = require('fs-extra');
const _ = require('lodash')
const modelDirectory = __dirname;

function getControllers() {
  var files = fs.readdirSync(__dirname)
  files = _.filter(files, fileName => {
    return fileName.indexOf('_coontroller.js') >= 0
  })
  return _.reduce(files, (models, fileName) => {
    var modelName = _.replace(fileName, '.js', '');
    var modelPath = __dirname + '/' + fileName;
    models[modelName] = require(modelPath);
    return models;
  }, {})
}


module.exports = getControllers();