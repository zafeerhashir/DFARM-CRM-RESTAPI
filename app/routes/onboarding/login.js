const userModel = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

module.exports = async function login(req, res, next) {
  //Login a registered user
  try {
    const { userName, password } = req.body;

    const document = await userModel
      .findOne({ userName })
      .populate("role", "roleName");

    if (!document) {
      await res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }

    const isPasswordMatch = await bcrypt.compare(password, document.password);

    if (!isPasswordMatch) {
      await res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }

    // document.token = jwt.sign({ _id: document._id }, process.env.JWT_KEY, {
    //   expiresIn: "24h",
    // });
    document.token = jwt.sign({ _id: document._id }, process.env.JWT_KEY, {});

    await document.save(async function (err, doc) {
      if (err) throw err;
      else await res.send({ status: "successfully login", document });
    });
  } catch (error) {
    await res.status(500).send(error);
  }
};
