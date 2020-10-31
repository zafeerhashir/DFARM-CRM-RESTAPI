const userModel = require("../../../models/user");
const objectId = require("mongodb").ObjectID;

module.exports = async function editUser(req, res, next) {
  try {
    document = await userModel.findOneAndUpdate(req.params.userId, req.body);
    await document.save();
    await res.send(document);
  } catch (err) {
    Medicine
    res.status(500).send(err);
  }
};
