// models/FrontOfficer.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FrontOfficerSchema = new Schema({
    name: {
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
    }
});

const FrontOfficer = mongoose.model('FrontOfficer', FrontOfficerSchema);
module.exports = FrontOfficer;
