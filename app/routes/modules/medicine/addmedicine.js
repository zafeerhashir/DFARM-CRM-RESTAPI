const medicine = require("../../../models/medicine");

module.exports = async function addMedicine(req, res, next) {
    try {
        const createdMedicine = new medicine(req.body);
        await createdMedicine.save();
        await res.send(createdMedicine);
    } catch (err) {
        res.status(500).send(err);
    }
};