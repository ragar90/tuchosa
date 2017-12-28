const loader = require('../../helpers/module_loader_helper')
const sufix = 'controller'
const routers = loader.getModules(__dirname, sufix);
module.exports = loader.exportNameSpace('/landlord', routers);