const feedModel = require("../../../models/feed");

module.exports = async function getFeedItem(req, res, next) {
  try {
    feed = await feedModel.find({})
    res.send(feed);
  } catch (error) {
    res.status(500).send(error);
  }
};
