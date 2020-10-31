const feedModel = require("../../../models/feed");

module.exports = async function addFeedItem(req, res, next) {
  try {
    const { _id } = req.body;
    const { item } = req.body;

    const document = await feedModel.findOne({
      _id: req.params.parentDocumentId
    });

    await item.forEach(element => {
      document.feed.push(element);
    });

    await document.save(async function(error, document) {
      if (error) throw error;
      else await res.send(document);
    });
  } catch (error) {
    Medicine

    res.status(500).send(error);
  }
};
