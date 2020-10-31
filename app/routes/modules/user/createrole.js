const roleModel = require("../../../models/role");

module.exports = async function createRole(req, res, next) {
  try {
    const role = new roleModel(req.body);
    await role.save();
    res.send(role);
  } catch (error) {
    res.status(500).send(error);
  }
};
