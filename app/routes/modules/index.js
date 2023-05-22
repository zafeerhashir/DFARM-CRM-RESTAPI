const modules = require("express").Router();

modules.use("/animal", require("./animal/index"));
modules.use("/milk", require("./milk/index"));
modules.use("/medicine", require("./medicine/index"));
modules.use("/", require("./user/index"));
modules.use("/feeditem", require("./feeditem/index"));
modules.use("/feeddate", require("./feeddate/index"));
modules.use("/user", require("./user/index"));
modules.use("/report", require("./report/index"));

module.exports = modules;
