const milkModel = require("../../../models/milk");

module.exports = async function addMilkPerDay(req, res, next) {
    try {
        const milk = milkModel.find({});
        if (!milk) await res.status(404).send("No item found");
        await res.send(milk);
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
};