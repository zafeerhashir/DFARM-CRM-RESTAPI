const milkModel = require("../../../models/milk");

module.exports = async function getMilk(req, res, next) {
    try {
        const milk = await milkModel.find({});
        if (!milk) await res.status(404).send("No item found");
        await res.send(milk);
    } catch (err) {
        res.status(500).send(err);
    }
};