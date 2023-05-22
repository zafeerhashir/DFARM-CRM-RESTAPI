const userModel = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

module.exports = async (req, res) => {
  //Login a registered user
  try {
    const { email, password } = req.body;

    const document = await userModel.findOne({ email })
      .populate({ path: "role", select: "roleName" });

    const isPasswordMatch = await bcrypt.compare(password, document.password);

    if (!isPasswordMatch) {
      await res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }

    if (document.status) {
      await res.status(200).send({ error: "Logout first", code: "E4" });
    }

    if (!document) {
      await res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }

    document.token = jwt.sign({ _id: document._id }, process.env.JWT_KEY, {
      expiresIn: "24h"
    });

    document.status = new Date().toLocaleTimeString();

    await document.save(async function (err, doc) {
      if (err) throw err;
      else await res.send({ status: "successfully login", document });
    });
  } catch (error) {
    await res.status(500).send(error);
  }
};
