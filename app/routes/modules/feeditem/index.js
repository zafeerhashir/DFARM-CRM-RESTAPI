const feeditem = require("express").Router();

feeditem.get("/", require("./getfeeditem"));
feeditem.post("/:parentDocumentId", require("./addfeeditem"));
feeditem.patch(
  "/:parentDocumentId/:childDocumentId",
  require("./editfeeditem")
);
feeditem.delete(
  "/:parentDocumentId/:childDocumentId",
  require("./deletefeeditem")
);

module.exports = feeditem;
