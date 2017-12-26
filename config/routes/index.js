const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const controllers = require('../../app/controllers');// => {cargos: {}, platos: {}}
const config = require('.')
const _ = require('lodash');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Merging all parametters into one single object
app.use(function (req, res, next) {
	req.mergedParams = _.assign({}, req.params, req.query, req.body)
	if (config.VERBOSE) {
		console.log('Received Parammetters: ', req.mergedParams)
	}
	next();
});

app.param("id", (req, res, next, id) => {
	next()
})

_.each(controllers, function (controlller, key) {
	const route = controlller.route; // => /route
	const router = controlller.router;
	const fullRoute = prefixRoute + route; // =>  /admin/route
	app.use(fullRoute, router)
})


module.exports = router