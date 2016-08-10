'use strict';
var uniqueRandomArray = require('unique-random-array');
var marvel = require('./marvel.json');

exports.all = marvel;
exports.random = uniqueRandomArray(marvel);
