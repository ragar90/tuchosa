var express = require('express');
var router = require('./route_mapper');
var bodyParser = require('body-parser');
var config = require('.')
var _ = require('lodash');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Merging all parametters into one single object
router.use(function (req, res, next) {
	req.mergedParams = _.assign({}, req.params, req.query, req.body)
	if (config.VERBOSE) {
		console.log('Received Parammetters: ', req.mergedParams)
	}
  next();
});

// TODO: Change this to use express router in a config file

router.use(express.static('public'))

router.get('/api/test', function (req, res) {
	var responseData = {
		field_1: 'Hola',
		field_2: 'Mundo'
	}
	res.send(responseData);
});

module.exports = router