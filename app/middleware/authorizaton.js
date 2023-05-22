const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const userModel = require("../models/user");

module.exports = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const data = jwt.verify(token, "DFARM");

    const user = await userModel.find({ token: token });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};
