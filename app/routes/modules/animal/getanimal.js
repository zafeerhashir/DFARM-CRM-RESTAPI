const animalModel = require("../../../models/animal");

module.exports = async function getAnimal(req, res, next) {
    try {
        const animal = await animalModel.find({}).populate('milk');

        if (!animal) await res.status(404).send("No item found");

        await res.send(animal);
    } catch (err) {
        res.status(500).send(err);
    }
};