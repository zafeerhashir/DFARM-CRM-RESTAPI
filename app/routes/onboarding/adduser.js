const roleModel = require("../../models/role");
const userModel = require("../../models/user");

const jwt = require("jsonwebtoken");

module.exports = async function addUser(req, res, next) {
  // Create a new user
  try {
    const findUser = await userModel.findOne({ userName: req.body.userName });

    const role = await roleModel.findOne({ roleName: req.params.roleName });

    if (!role) {
      await res.status(204).send({ errorMessage: "Role did not available" });
    }

    if (findUser) {
      await res.status(409).send({ errorMessage: "Username not available" });
    } else {
      const user = new userModel(req.body);
      user.role = role._id;

      user.save(async (error, user) => {
        if (error) throw error;
        await role.user.push(user);

        role.save(async (error, role) => {
          if (error) throw error;

          await res.send(user);
        });
      });
    }
  } catch (error) {
    Medicine
    res.status(500).send(error);
  }
};
