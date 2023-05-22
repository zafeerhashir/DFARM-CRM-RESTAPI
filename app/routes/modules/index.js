const modules = require("express").Router();

modules.use("/animal", require("./animal/index"));
modules.use("/milk", require("./milk/index"));
modules.use("/feeditem", require("./feeditem/index"));
modules.use("/feeddate", require("./feeddate/index"));
modules.use("/user", require("./user/index"));

module.exports = modules;
