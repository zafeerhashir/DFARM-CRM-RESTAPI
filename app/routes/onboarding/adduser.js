const roleModel = require("../../models/role");
const userModel = require("../../models/user");

const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // Create a new user
  try {
    const user =  new userModel(req.body);
    const role = await roleModel.findOne({ _id: req.body.role },async(error,document)=>
    {
      if (error) throw error;
    })
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
