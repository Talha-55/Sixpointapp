const FrontOfficer = require("../../models/frontOfficer.model");



exports.create = async (req, res) => {
    try {
        const officer = new FrontOfficer(req.body);
        await officer.save();
        res.status(201).send(officer);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

exports.list = async (req, res) => {
    try {
        const officers = await FrontOfficer.find({});
        res.status(200).send(officers);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const officer = await FrontOfficer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!officer) return res.status(404).send({ error: 'FrontOfficer not found' });
        res.status(200).send(officer);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

exports.deleteTeam = async (req, res) => {
    try {
        const officer = await FrontOfficer.findByIdAndDelete(req.params.id);
        if (!officer) return res.status(404).send({ error: 'FrontOfficer not found' });
        res.status(200).send({ message: "FrontOfficer deleted" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}