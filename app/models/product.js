const date = new Date();

module.exports = {
 collMod: "Transactions",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fromDate", "toDate"],
      properties: {
        fromDate: {
          bsonType: "int",
          description: "From Date must be required",
        },
        toDate: {
          bsonType: "int",
          description: "To Date must be required"
        }
      }
    },
  }
};
