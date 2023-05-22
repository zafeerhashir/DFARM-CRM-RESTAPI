const milk = require("express").Router();

milk.get("/", require("./getmilk"));
milk.post("/:parentDocumentId", require("./addmilk"));
milk.patch("/:parentDocumentId/:childDocumentId", require("./editmilk"));
milk.delete("/:parentDocumentId/:childDocumentId", require("./deletemilk"));

module.exports = milk;
