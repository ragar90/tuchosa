var express = require('express')
var app = express()
var controllers = require('../../app/controllers')
var _ = require('lodash');
var routesMaps = {}


function getResourceRouter(params) {
	return require('./resource_router')
}
app.resources = (resourceName, params = {}) => {
	var controller = controllers.api[resourceName]
	var router = getResourceRouter().resource(controller, params);
	this.use(resourceName, router)
	return this;
}

module.exports = app;
