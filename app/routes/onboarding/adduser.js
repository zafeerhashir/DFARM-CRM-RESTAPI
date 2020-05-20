const roleModel = require("../../models/role");
const userModel = require("../../models/user");

const jwt = require("jsonwebtoken");


module.exports = async function addUser(req, res, next) {
  // Create a new user
  try {


    const findUser = await userModel.findOne({ userName: req.body.userName });

    console.log(findUser,'sdxxxxsd')

    if (findUser) {
      await res.status(409).send({ errorMessage: "Username not available" });
    }

    const role = await roleModel.findOne({ roleName: req.params.roleName });

    if (!role) {
      await res.status(204).send({ errorMessage: "Role did not available" });
    }

    const user = new userModel(req.body);
    user.role = role._id


    // const role = await roleModel.findOne(
    //   { _id: req.params.roleId },
    //   async (error, document) => {
    //     if (error) throw error;
    //   }
    // );

    user.save(async (error, user) => {
      if (error) throw error;
      console.log(role, "role");
      await role.user.push(user);

      role.save(async (error, role) => {
        if (error) throw error;

        await res.send(user);
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
