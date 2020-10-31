const userModel = require("../../../models/user");
const objectId = require("mongodb").ObjectID;

module.exports = async function deleteUser(req, res, next) {
  try {
    const document = await userModel.findByIdAndDelete(req.params.userId);
    await res.send(document);
  } catch (err) {
    Medicine
    res.status(500).send(err);
  }
};
