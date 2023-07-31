const mongoose = require('mongoose');
const autoPopulate = require('./autoPopulate');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
            unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: function () {
				return !this.googleId;
			},
		},
		joinedType: {
			type: String,
			required: true,
		},
		googleId: {
			type: String,
			required: function () {
				return !this.password;
			},
		},
		status: { type: Number, default: 1 },
	},
	{ timestamps: true }
);
autoPopulate(userSchema);

module.exports = mongoose.model('User', userSchema);
