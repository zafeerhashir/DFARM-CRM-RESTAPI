const medicine = require("../../../models/medicine");

module.exports = async function deleteMedicine(req, res, next) {
  try {
    const deletedMedicine = await medicine.findByIdAndDelete(req.params.id);
    await res.send(deletedMedicine);
  } catch (err) {
    res.status(500).send(err);
  }
};
