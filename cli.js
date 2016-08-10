#!/usr/bin/env node
'use strict';
var meow = require('meow');
var marvel = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ marvel',
		'  Captain America',
		'',
		'  $ marvel --all',
		'  Namor',
		'  The Call',
		'  ...',
		'',
		'Options',
		'  --all   Get all names instead of a random name'
	]
});

console.log(cli.flags.all ? marvel.all.join('\n') : marvel.random());
