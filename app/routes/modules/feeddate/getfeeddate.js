const feedModel = require("../../../models/feed");

module.exports = async function getFeedDate(req, res, next) {
  try {
    feed = await feedModel.find({});
    if (!feed) res.status(404).send("No item found");
    res.send(feed);
  } catch (err) {
    res.status(500).send(err);
  }
};
