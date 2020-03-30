const animalModel = require("../../../models/animal");

module.exports = async function editAnimal(req, res, next) {
  try {
    const animal = await animalModel.findByIdAndUpdate(req.params.id, req.body);
    await animal.save();
    res.send(animal);
  } catch (err) {
    res.status(500).send(err);
  }
};
