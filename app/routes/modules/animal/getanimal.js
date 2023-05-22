const animalModel = require("../../../models/animal");

module.exports = async function getAnimal(req, res, next) {
  try {
    await animalModel
      .find({})
      .populate("milk")
      .exec((error, item) => {
        if (!item) res.status(404).send("No item found");
        else res.send(item);
      });
  } catch (err) {
    res.status(500).send(err);
  }
};
