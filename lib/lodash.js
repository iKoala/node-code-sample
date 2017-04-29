'use strict';

const _ = require('lodash');

const DEAULT_SET = {
	
};

const POST_DATA = {
	id: 1,
	name: 'foo',
	identity: 'bar',
	invalidInteger: 'invalid'
};

console.log('Smaple Data: <%j>', POST_DATA);

var strData;

strData = 
	_.mapValues(
		_.pick(POST_DATA, ['id', 'name', 'identity']),
		_.toString
	);

console.log('1. string data: <%j>', strData);
	
strData = _.chain(_.pick(POST_DATA, ['id', 'name', 'identity']))
	.mapValues(_.toString);

console.log('2. string data: <%j>', strData);

var intData = _.chain(_.pick(POST_DATA, ['id', 'name', 'invalidInteger']))
	.mapValues(_.toInteger);

console.log('integer data: <%j>', intData);
