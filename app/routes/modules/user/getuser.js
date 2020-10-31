const userModel = require("../../../models/user");
const roleModel = require("../../../models/role");

 // BASIC_USER
 // SUPER_USER
module.exports = async function getUser(req, res, next) {
  try {
    await roleModel
      .find({ roleName: "BASIC_USER" }).
      populate('user')
      .exec(async (error, user) => {
        if (error) throw error;
        await res.send(user);
      });
    // res.send(user)
  } catch (err) {
    res.status(500).send(err);
  }
};
