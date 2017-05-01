'use strict';

const os = require('os');
const path = require('path');
const _ = require('lodash');

var printScriptName = function(filename) {
	// console.info('%s', _.repeat(os.EOL, 1));
	console.info('');
	console.info('> Running <%s>', path.basename(filename, '.js'));
	console.info('');
};

module.exports = {
	printScriptName: printScriptName
};
