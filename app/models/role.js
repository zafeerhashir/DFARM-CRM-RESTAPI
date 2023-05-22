const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolesSchema = Schema({
  roleName: String,
  user: [{ type: Schema.Types.ObjectId, ref: "user" }],
});

module.exports = mongoose.model("role", rolesSchema);
