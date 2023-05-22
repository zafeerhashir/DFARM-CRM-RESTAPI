const feedModel = require("../../../models/feed");

module.exports = async (req, res, next) => {
  try {
    const feed = await feedModel.findByIdAndDelete(req.params.id);

    if (!feed) res.status(404).send("No item found");

    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
