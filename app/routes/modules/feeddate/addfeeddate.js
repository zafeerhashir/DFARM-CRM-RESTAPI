const feedModel = require("../../../models/feed");

module.exports = async function addFeedDate(req, res, next) {
  try {
    const findFeed = await feedModel.findOne({ date: new Date(req.body.date) });
    if (findFeed) {
      await res.send(findFeed);
    } else {
      const feed = new feedModel(req.body);
      await feed.save();
      await res.send(feed);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
