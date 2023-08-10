const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const SpacesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    numberOfRooms: {
        type: Number,
        required: true
    },
    houseCredentials: String,
    wifiPassword: String,
    houseCodes: String,
    alarmCodes: String,
    garageCodes: String,
    listOfTeams: [{
        type: ObjectId,
        ref: 'Team',  // 'Team' should match the name you used when defining the Team model
        autopopulate: true  // this ensures the plugin populates this field automatically
    }]
});

// SpacesSchema.plugin(autoPopulate);
const Spaces = mongoose.model('Spaces', SpacesSchema);
module.exports = Spaces;
