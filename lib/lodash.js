'use strict';

const _ = require('lodash');
const helper = require('./helper');

helper.printScriptName(__filename);

const DEFAULT_DATA = {
	id: 0,
	name: '',
	identity: '',
	extraString: '',
	extraNumber: 0,
	moreNumber: 1
};

var POST_DATA = {
	id: "1",
	name: 'foo',
	identity: 'bar',
	unwantedString: 'unwanted string',
	invalidInteger: 'i am not an integer',
	moreNumber: 'not a valid number'
};

const print = function(val, key) {
	if (_.isNil(key)) {
		console.log('%s', val);
	} else {
		console.log('%s => %s', key, val);
	}
};

console.log('Smaple Data: <%j>', POST_DATA);

// _.each(POST_DATA, print);

var strData;

strData = 
	_.mapValues(
		_.pick(POST_DATA, ['id', 'name', 'identity']),
		_.toString
	);

console.log('1. pick string data by key');
console.log(strData);
	
strData = _.chain(_.pick(POST_DATA, ['id', 'name', 'identity']))
	.mapValues(_.toString)
	.value();

console.log('2. pick string data by key (chain mode):');
console.log(strData);

strData = _.chain(POST_DATA)
 .pick(_.keys(_.pickBy(DEFAULT_DATA, _.isString)))
 .value();

console.log('3. pick string data by default data key:');
console.log(strData);

var intData;

intData = _.chain(_.pick(POST_DATA, ['id', 'name', 'invalidInteger']))
	.mapValues(_.toInteger);

console.log('1. integer data: <%j>', intData);

intData = _.chain(POST_DATA)
 .pick(_.chain(DEFAULT_DATA).pickBy(_.isNumber).keys().value())
 .mapValues(_.toNumber);

console.log('2. integer data: <%j>', intData);
