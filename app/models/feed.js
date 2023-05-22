const regex = require("./regex");

const mongoose = require("mongoose");

const feedItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  unit: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  consumed: {
    type: Boolean,
    default: false,
  },
});

const feedSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  feed: [feedItemsSchema],
});

module.exports = mongoose.model("feed", feedSchema);
