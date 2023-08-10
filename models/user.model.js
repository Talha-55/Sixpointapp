const mongoose = require('mongoose');
const autoPopulate = require('./autoPopulate');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+\@.+\..+/, "Please enter a valid email address"]
		},
		password: {
			type: String,
			required: true,
		},
		DOB: {
			type: Date,
		},
		status: { type: Number, default: 1 },
	},
	{ timestamps: true }
);
// autoPopulate(userSchema);

const User = mongoose.model('User', userSchema);
module.exports = User
