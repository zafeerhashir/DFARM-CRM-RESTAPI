const feedModel = require("../../../models/feed");

module.exports = async function editFeedItem(req, res, next) {
  const { unit, price, kilogram, name } = req.body;
  try {
    const document = await feedModel.findOne({
      _id: req.params.parentDocumentId
    });

    item = await document.feed.id(req.params.childDocumentId);
    item.unit = unit;
    item.price = price;
    item.kilogram = kilogram;
    item.name = name;

    await document.save(async function(error, document) {
      if (error) throw error;
      else await res.send(document);
    });
  } catch(error) {
    res.status(500).send(error);
  }
};
