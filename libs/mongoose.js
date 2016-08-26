var mongoose = require('mongoose');
var config = require('../config');
var log = require('./log')(module);

mongoose.connect(config.get('mongoose:url'),config.get('mongoose:options'));

module.exports = mongoose;