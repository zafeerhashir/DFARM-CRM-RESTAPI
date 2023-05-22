const userModel = require("../../../models/user");

module.exports = async (req, res, next) => {
  try {
    await userModel
      .find({})
      .populate({ path: "role", select: "roleName" })
      .exec(async (error, user) => {
        if (error) throw error;

        await res.send(user);
      });
    // res.send(user)
  } catch (err) {
    res.status(500).send(err);
  }
};
