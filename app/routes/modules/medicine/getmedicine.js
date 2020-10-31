const medicine = require("../../../models/medicine");

module.exports = async function getMedicine(req, res, next) {
  try {
    await medicine
      .find({})
      .populate("animal")
      .exec((error, item) => {
        if (error) throw error;
        res.send(item);
      });
  } catch (err) {
      Medicine
    res.status(500).send(err);
  }
};
