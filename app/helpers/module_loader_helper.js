const fs = require('fs-extra');
const path = require('path')
const _ = require('lodash');
const controllerDirectory = __dirname;

function getModules(moduleIndex, moduleSufix) {
  var modules = fs.readdirSync(moduleIndex)
  modules = _.map(modules, moduleName => {
    const modulePath = path.join(moduleIndex, moduleName);
    const fileIndicator = (moduleSufix !== null && moduleSufix !== undefined) ? '_' + moduleSufix + '.js' : '';
    var moduleData = {
      moduleName: moduleName,
      modulePath: modulePath,
      isDirectory: fs.lstatSync(modulePath).isDirectory(),
      isFile: fs.lstatSync(modulePath).isFile(),
      fileIndicator: fileIndicator
    }
    return moduleData;
  });
  modules = _.filter(modules, moduleData => {
    return (moduleData.isFile && moduleData.moduleName.indexOf(moduleData.fileIndicator) >= 0) || (moduleData.isDirectory)
  })
  modules = _.map(modules, moduleData => {
    return require(moduleData.modulePath);
  })
  return modules;
}

function exportController(route, router) {
   return {
     type: 'controller',
     router: router,
     route: route
   }
}

function exportNameSpace(route, router) {
  return {
    type: 'namespace',
    routers: router,
    route: route
  }
}

module.exports = {
  getModules: getModules,
  exportController: exportController,
  exportNameSpace: exportNameSpace
};