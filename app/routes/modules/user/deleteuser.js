const userModel = require("../../../models/user");
const objectId = require("mongodb").ObjectID;

module.exports = async function deleteUser(req, res, next) {
  try {
    document = await userModel.findByIdAndRemove(req.params.userId);
    await document.save();
    await res.send(document);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
