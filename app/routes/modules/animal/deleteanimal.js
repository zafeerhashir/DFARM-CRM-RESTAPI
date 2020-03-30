const animalModel = require("../../../models/animal");

module.exports = async function deleteAnimal(req, res, next) {
  try {
    await animalModel.findByIdAndDelete(req.params.id);
    res.status(200).send();
  } 
  catch (err) {
    res.status(500).send(err);
  }
};
