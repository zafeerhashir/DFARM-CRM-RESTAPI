const animalModel = require("../../../models/animal");

module.exports = async function deleteMilk(req, res, next) {
  try {
    const document = await animalModel.findOne({
      _id: req.params.parentDocumentId
    });

    await document.milk.pull({ _id: req.params.childDocumentId }).remove();

    await document.save(async function(error) {
      if (error) throw error;

      await res.status(200).send();
    });
  } catch (err) {
    console.log(err, "error");

    res.status(500).send(err);
  }
};
