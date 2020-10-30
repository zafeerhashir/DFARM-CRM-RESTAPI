const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },

    purpose: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: false,
    },

    animal: {
        type: Schema.Types.ObjectId,
        ref: "animal",
    },
});

module.exports = mongoose.model("medicine", medicineSchema);