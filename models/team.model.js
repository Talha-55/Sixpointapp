// models/Team.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const autoPopulate = require('mongoose-autopopulate');


const TeamSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
     players: [{
        type: ObjectId,
        ref: 'User',  // This should match the name you've used when defining the User model
        autopopulate: true // If you want to auto-populate player details when querying a team
    }]
},
{
    timestamps:true,}
);
TeamSchema.plugin(autoPopulate);
const Team = mongoose.model('Team', TeamSchema);
module.exports = Team;
