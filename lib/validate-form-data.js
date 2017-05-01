'use strict';

const _ = require('lodash');
const helper = require('./helper');

helper.printScriptName(__filename);

const DEFAULT_DATA = {
	id: 0,
	name: '',
	identity: '',
	extraString: '',
	extraNumber: 0
};

var postData = {
	id: "1",
	name: 'foo',
	identity: 'bar',
	unwantedString: 'unwanted string',
	invalidInteger: 'i am not an integer'
};

var validateFormData = function(postData, defaultData) {
	var resultData = _.cloneDeep(defaultData);
	
	resultData = _.mapValues(resultData, function(v, k) {
		if (_.isString(v)) {
			return _.toString(postData[k]);
		}
		if (_.isInteger(v)) {
			return _.toInteger(postData[k]);
		}
		if (_.isNumber(v)) {
			return _.toNumber(postData[k]);
		}
		return postData[k];
	});
	
	return resultData;
};

var result = validateFormData(postData, DEFAULT_DATA);

console.log('result: <%j>', result);
