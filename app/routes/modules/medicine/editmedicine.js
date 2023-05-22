const medicine = require("../../../models/medicine");

module.exports = async function editMedicine(req, res, next) {
  try {
    const updatedMedicine = await medicine.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    await updatedMedicine.save();
    await res.send(updatedMedicine);
  } catch (err) {
    res.status(500).send(err);
  }
};
