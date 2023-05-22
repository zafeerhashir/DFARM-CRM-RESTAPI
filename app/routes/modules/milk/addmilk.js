const animalModel = require("../../../models/animal");

module.exports = async (req, res, next) => {
  const { _id } = req.body;

  const { milk } = req.body;

  const document = await animalModel.findOne({
    _id: req.params.parentDocumentId,
  });

  await milk.forEach((element) => {
    document.milk.push(element);
  });

  await document.save(async function (err, document) {
    if (err) await res.status(500).send(err);
    else await res.send(document);
  });
};
