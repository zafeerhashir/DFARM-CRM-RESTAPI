const feedModel = require("../../../models/feed");

module.exports = async function getFeedItem(req, res, next) {
  try {
    feed = await feedModel.find({}).populate("feed");
    res.send(feed);
  } catch (error) {
    res.status(500).send(error);
  }
};
