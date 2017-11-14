var config = require('./config');
var app = require('./config/routes')


app.listen(process.env.PORT || 3000)
console.log('Ecomanda listening on', process.env.PORT || 3000)
module.exports = app;




