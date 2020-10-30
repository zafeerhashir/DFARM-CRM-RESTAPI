const milkModel = require("../../../models/milk");

module.exports = async function editMilk(req, res, next) {
    try {
        const milk = await milkModel.findByIdAndUpdate(req.params.id, req.body);
        await milk.save();
        await res.send(milk);
    } catch (err) {
        res.status(500).send(err);
    }
};