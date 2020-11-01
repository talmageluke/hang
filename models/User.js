const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

UserSchema.statics.checkExistingField = async (field, value) => {
    return await User.findOne({
        [`${field}`]: value
    }

    )
}


module.exports = User = mongoose.model("users", UserSchema);