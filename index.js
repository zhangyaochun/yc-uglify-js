'use strict';
var Ug = require('uglify-js');
module.exports = function(content,config) {
	config.fromString = true;
	return Ug.minify(content,config).code;
};