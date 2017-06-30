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
  var resultData = _.chain(defaultData)
    .cloneDeep()
    .mapValues(function(v, k) {
      if (_.isString(v)) {
        return _.toString(postData[k]);
      }
      if (_.isNumber(v)) {
        v = _.toNumber(postData[k]);
        return (isNaN(v)) ? 0 : v;
      }
      if (_.isInteger(v)) {
        v = _.toInteger(postData[k]);
        return (isNaN(v)) ? 0 : v;
      }
      return postData[k];
    }).value();

  return resultData;
};

var result = validateFormData(postData, DEFAULT_DATA);

console.log('result: <%j>', result);
