const milkModel = require("../../../models/milk");

module.exports = async function deleteMilk(req, res, next) {
  try {
    const milk = await milkModel.findByIdAndDelete(req.params.id);
    await res.send(milk);
  } catch (err) {
    res.status(500).send(err);
  }
};
