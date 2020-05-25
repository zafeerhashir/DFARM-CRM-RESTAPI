const animalModel = require("../../../models/animal");

module.exports = async function addAnimal(req, res, next) {
  try {
    const findAnimal = await animalModel.find({ tag: req.body.tag });

    if (findAnimal) {
      await res
        .status(409)
        .send({ errorMessage: "Animal already added before" });
    } else {
      const animal = new animalModel(req.body);

      await animal.save();

      await res.send(animal);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
