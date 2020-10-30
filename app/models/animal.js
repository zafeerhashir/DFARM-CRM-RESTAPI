const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: false,
    },

    purchaseDate: {
        type: Date,
        required: false,
    },

    origin: {
        type: String,
        required: false,
    },

    milk: [{
        type: Schema.Types.ObjectId,
        ref: "milk",
        required: false,
    }],
});

module.exports = mongoose.model("animal", animalSchema);