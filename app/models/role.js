const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolesSchema = Schema({
  roleName: String,
});


module.exports = mongoose.model('role', rolesSchema);