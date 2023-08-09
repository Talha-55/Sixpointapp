const autoPopulate = require('mongoose-autopopulate');

module.exports = function (schema) {
	schema.plugin(autoPopulate);
};
