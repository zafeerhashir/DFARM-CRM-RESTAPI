const mongoose = require('mongoose');

const milkAnimalSchema = new mongoose.Schema({

    date: {
        type: Date,
        required: true,
      },
 
    fat:{
        type: Number,
        required: false,
    },
    milkProduceAM:{
        type: Number,
        required: true,
        default: 0,
    },

    milkProducePM:{
        type: Number,
        required: true,
        default: 0,

  },
    

  });


const animalSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true, 
    unique: true,
    drop: true
  },
  price: {
    type: Number,
    required: false,
  },
  milk: [milkAnimalSchema]
});



module.exports = mongoose.model("animal", animalSchema);


