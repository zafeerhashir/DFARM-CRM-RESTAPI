const regex = require("./regex");

const mongoose = require("mongoose");

const feedIemsSchema = new mongoose.Schema({
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
  kilogram: {
    type: Number,
    required: true,
  },
});

const feedSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    max: new Date().toLocaleDateString(),
  },
  feed: [feedIemsSchema],
});

module.exports = mongoose.model("feed", feedSchema);

// feedSchema = {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required: ["date", "feed"],
//             properties: {
//                 date: {
//                     bsonType: ["object"],
//                     description: "date must be an iso date"
//                 },
//                 feed: {
//                     bsonType: "object",
//                     required: ["name", "unit", "price"],
//                     properties: {
//                         name: {
//                             bsonType: ["double"],
//                             description: "name must be an string",
//                             regex: regex.alphabetRegex
//                         },
//                         unit: {
//                             bsonType: ["double"],
//                             "description": "unit must be a float",
//                             regex: regex.floatRegex

//                         },
//                         price: {
//                             bsonType: ["double"],
//                             description: "price must be a float",
//                             regex: regex.floatRegex

//                         },

//                     }
//                 }
//             }
//         }
//     }
// }

// module.exports = feedSchema
