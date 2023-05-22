const animalModel = require("../../../models/animal");

module.exports = async (req, res, next) => {
  const { date, fat, milkProduceAM, milkProducePM } = req.body;

  const document = await animalModel.findOne({
    _id: req.params.parentDocumentId,
  });

  item = await document.milk.id(req.params.childDocumentId);

  item.date = date;

  item.fat = fat;

  item.milkProduceAM = milkProduceAM;

  item.milkProducePM = milkProducePM;

  await document.save(async function (err, document) {
    if (err) await res.status(500).send(err);
    else await res.send(document);
  });
};
