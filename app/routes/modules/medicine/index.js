const medicine = require("express").Router();

medicine.get("/", require("./getmedicine"));
medicine.post("/", require("./addmedicine"));
medicine.patch("/:id", require("./editmedicine"));
medicine.delete("/:id", require("./deletemedicine"));

module.exports = medicine;
