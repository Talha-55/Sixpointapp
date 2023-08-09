// models/Team.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Team = mongoose.model('Team', TeamSchema);
module.exports = Team;
