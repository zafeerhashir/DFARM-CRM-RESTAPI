const feedModel = require("../../../models/feed");

module.exports = async function addFeedDate(req, res, next) {
  const feed = new feedModel(req.body);
  try {
    await feed.save();
    res.send(feed);
  } catch (err) {
    res.status(500).send(err);
  }
};
