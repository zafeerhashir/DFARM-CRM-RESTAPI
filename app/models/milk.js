const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const milkSchema = new mongoose.Schema({
    animal: {
        type: Schema.Types.ObjectId,
        ref: "animal",
        required: false,
        default: null,
    },

    date: {
        type: Date,
        required: true,
    },

    rate: {
        type: Number,
        required: false,
        default: 1
    },

    fat: {
        type: Number,
        required: false,
    },

    milkProduceAM: {
        type: Number,
        required: true,
        default: 0,
    },

    milkProducePM: {
        type: Number,
        required: true,
        default: 0,
    },
});

module.exports = mongoose.model("milk", milkSchema);