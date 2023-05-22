const roleModel = require("../../../models/role");

module.exports = async function getRole(req, res, next) {
  try {
    const role = await roleModel
      .find({})
      .select("roleName")
      .exec(async (error, role) => {
        if (error) throw error;

        await res.send(role);
      });
  } catch (err) {
    res.status(500).send(err);
  }
};
