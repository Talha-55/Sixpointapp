const Team = require("../../models/team.model");



exports.create = async (req, res) => {
    try {
        const team = new Team(req.body);
        await team.save();
        res.status(201).send(team);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

exports.list = async (req, res) => {
    try {
        const teams = await Team.find({});
        res.status(200).send(teams);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!team) return res.status(404).send({ error: 'Team not found' });
        res.status(200).send(team);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

exports.deleteTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndDelete(req.params.id);
        if (!team) return res.status(404).send({ error: 'Team not found' });
        res.status(200).send({ message: "Team deleted" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}