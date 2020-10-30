const milkModel = require("../../../models/milk");
const animal = require("../../../models/animal");

module.exports = async function addMilk(req, res, next) {
  try {
    const createdMilk = new milkModel(req.body);
    await createdMilk.save();
    if (req.body.animal) {
      const animalMilk = await animal.findById(req.body.animal);
      animalMilk.milk.push(createdMilk._id);
      await animalMilk.save();
    }
    await res.send(createdMilk);
  } catch (err) {
    res.status(500).send(err);
  }
};
