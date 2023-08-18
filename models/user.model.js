const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const autoPopulate = require('mongoose-autopopulate');


const userSchema = new Schema(
    {
        username: {
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
        },
        DOB: {
            type: Date,
        },
        status: { 
            type: Number, 
            default: 1 
        },
        role: {
            type: String,
        },
        inHouse: {
            type: Boolean,
        },
        teamRef: {
            type: ObjectId,
            ref: 'Team',  // Make sure 'Team' matches the name you've used when defining the Team model
			autopopulate: true  // this ensures the plugin populates this field automatically
        }
    },
    { timestamps: true } // This will automatically add createdAt and updatedAt fields
);

userSchema.plugin(autoPopulate);

const User = mongoose.model('User', userSchema);
module.exports = User
