// const db = require('../../db/db.connect')
const assert = require('assert');
var ObjectId = require('mongodb').ObjectID;


module.exports = (req,res,next) =>
{


     db.client.connect(err => {

        const Transactions = db.client.db(db.dbName).collection('Transactions')
        const Transactions_Items = db.client.db(db.dbName).collection('Transactions_Items')

        const cursor = Transactions.
        aggregate(
        [
         {
            $lookup:
              {
                  from: "Transactions_Items",
                  localField: "items",
                  foreignField: "_id",
                  as: "Items"
              }
          },
          
          {
          $project : {  
                        items: 0, 
                      }
          }
        ]
        )
      
        cursor.forEach(function(doc)
        {
          res.
          status(200).
          json({ results: doc })
        })
 
})

}
