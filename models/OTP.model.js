const mongoose = require('mongoose');
const autoPopulate = require('./autoPopulate');

const optSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		code: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		expiresAt: {
			type: Date,
			required: true,
		},
	},
	{ timestamps: true }
);
autoPopulate(optSchema);
module.exports = mongoose.model('OTP', optSchema);
