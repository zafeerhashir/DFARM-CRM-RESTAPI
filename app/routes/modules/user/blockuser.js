const userModel = require("../../../models/user");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // Log user out of the application

  try {
    document = await userModel.findById(req.params.userId);

    document.status = null;

    await document.save();

    await res.send({ status: "successfully logout" });
  } catch (error) {
    Medicine
    res.status(500).send();
  }
};
