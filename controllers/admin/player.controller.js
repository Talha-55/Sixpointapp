const User = require("../../models/user.model");


exports.createPlayerProfile = async (req, res) => {
	try {
		const player = new User(req.body);
		await player.save();
		res.status(201).send(player);
	} catch (error) {
		res.status(400).send(error);
	}
}

exports.getAllPlayers = async (req, res) => {
	try {
		const users = await User.find({});
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}
exports.getPlayerById = async (req, res) => {
	try {
		const player = await User.findById(req.params.id);
		if (!player) return res.status(404).send('Player not found');
		res.status(200).send(player);
	} catch (error) {
		res.status(400).send(error);
	}
}
exports.editPlayer = async (req, res) => {
	try {
		const player = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!player) return res.status(404).send('Player not found');
		res.status(200).send(player);
	} catch (error) {
		res.status(400).send(error);
	}
}

exports.deletePlayer = async (req, res) => {
	try {
		const player = await User.findByIdAndDelete(req.params.id);
		if (!player) return res.status(404).send('Player not found');
		res.status(200).send({ message: "Player deleted" });
	} catch (error) {
		res.status(400).send(error);
	}
}

// Username ya email se user search karne ke liye
exports.searchPlayres = async (req, res) => {
	try {
		const { username, email } = req.query;
		const query = {}

		if (username) {
			query.username = username;
		}

		if (email) {
			query.email = email;
		}

		const users = await User.find(query);
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};