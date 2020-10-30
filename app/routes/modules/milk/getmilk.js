const milkModel = require("../../../models/milk");

module.exports = async function getMilk(req, res, next) {
  try {
    await milkModel
      .find({})
      .populate("animal")
      .exec((error, item) => {
        if (error) throw error;
        if (!item) res.status(404).send("No item found");
        else res.send(item);
      });
    // if (!milk) await res.status(404).send("No item found");
  } catch (err) {
    res.status(500).send(err);
  }
};
