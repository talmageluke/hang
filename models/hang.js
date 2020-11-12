const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hangSchema = new Schema({

    participants: { type: Number, required: true },
    event: { type: String, required: true },
    skill: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    details: { type: String, required: true },
    eventDate: { type: String, required: true },
    coming: { type: Array, required: false },
    date: { type: Date, default: Date.now }

});

const Hang = mongoose.model("Hang", hangSchema);

module.exports = Hang;