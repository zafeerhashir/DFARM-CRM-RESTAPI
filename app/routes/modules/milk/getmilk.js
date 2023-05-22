const animalModel = require("../../../models/animal");

module.exports = async (req, res, next) => {
  try {
    document = await animalModel.find({});

    res.send(document);
  } catch (err) {
    res.status(500).send(err);
  }
};
