const milkModel = require("../../../models/milk");

module.exports = async function addMilkPerDay(req, res, next) {
    try {
        const milk = new milkModel(req.body);
        await milk.save();
        await res.send(milk);
    } catch (err) {
        res.status(500).send(err);
    }
};