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
    role:{
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true,
    }
},
   {timestamps:true}
);

const FrontOfficer = mongoose.model('FrontOfficer', FrontOfficerSchema);
module.exports = FrontOfficer;
