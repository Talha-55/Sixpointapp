const Spaces = require("../../models/spaces.model");



exports.create = async (req, res) => {
    try {
        const space = new Spaces(req.body);
        await space.save();
        res.status(201).send(space);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

exports.list = async (req, res) => {
    try {
        const spaces = await Spaces.find({});
        res.status(200).send(spaces);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const space = await Spaces.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!space) return res.status(404).send({ error: 'Space not found' });
        res.status(200).send(space);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

exports.deleteTeam = async (req, res) => {
    try {
        const space = await Spaces.findByIdAndDelete(req.params.id);
        if (!space) return res.status(404).send({ error: 'Space not found' });
        res.status(200).send({ message: "Space deleted" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}