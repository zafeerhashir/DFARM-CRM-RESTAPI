const animalModel = require('../../../models/animal');




module.exports = async (req, res, next) => {
  const animal = new animalModel(req.body);

  try {
    await animal.save();

    await res.send(animal);
  }
  catch (err) {
    res.status(500).send(err);
  }
}
