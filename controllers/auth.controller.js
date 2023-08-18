const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');


exports.register = async (req, res, next) => {
	console.log("Api Calling")
	try {
		const {
			username,	
			email,
			password,
		} = req.body;
		console.log('email', req.body);
			const existingUser = await User.findOne({ email });
			if (existingUser) {
				return res.status(409).json({
					status: 'fail',
					showableMessage: 'User with this email already exists',
				});
			}
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);

			// Create new user
			const newUser = await User.create({
				username,
				email,
				password: hashedPassword,
			});


			// Create JWT token
			const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
				expiresIn: '1h',
			});
			// await newUser.save();
			// Respond with token and user data
			return res.status(201).json({
				status: 'success',
				data: { token, user: { id: newUser?._id, email: newUser.email } },
				showableMessage: 'User registered successfully',
			});
		
	} catch (error) {
		console.error('Error in register:', error);
		return res
			.status(500)
			.json({ status: 'fail', showableMessage: error.message});
	}
};

exports.login = async (req, res, next) => {
	try {

		const {email, password} = req.body
		const user = await User.findOne({ email });
	 		if (!user) {
	 			return res.status(401).json({
	 				status: 'fail',
	 				showableMessage: 'Invalid email or password',
	 			});
	 		}
				// Check if password is correct
	 		const isPasswordCorrect = await bcrypt.compare(password, user.password);
	 		if (!isPasswordCorrect) {
	 			return res.status(401).json({
	 				status: 'fail',
	 				showableMessage: 'Invalid email or password',
	 			});
	 		}

	 		// Create JWT token
	 		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
	 			expiresIn: '1h',
			});
			return res.json({
				status: 'success',
				data: { token, user:user},
				showableMessage: 'Logged in successfully',
			});
		}
	
	  catch (error) {
	 	console.error('Error in register:', error);
	 	return res
	 		.status(500)
	 		.json({ status: 'fail', showableMessage: 'Internal server error' });
	 }

};

exports.getUserIdByEmail = async (req, res) => {
	try {
		const { email } = req.params;
		const user = await User.findOne({ email }, { _id: 1 });

		if (!user) {
			return res.status(404).json({
				status: 'fail',
				showableMessage: 'User not found',
			});
		}

		return res.status(200).json({
			status: 'success',
			data: { userId: user._id },
			showableMessage: 'User found successfully',
		});
	} catch (error) {
		console.error('Error in getUserIdByEmail:', error);
		return res.status(500).json({
			status: 'fail',
			showableMessage: 'Internal server error',
		});
	}
};
