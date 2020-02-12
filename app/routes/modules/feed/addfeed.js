const db = require('../../../db/db.connect')
var ObjectId = require('mongodb').ObjectID;
const  validateSchema  = require('../../../validations/validations')

module.exports = async (req, res, next )  =>
{
        const { name, unit, price, date } = req.body
    
        validateField = [
                                { 
                                        fieldValue: name, 
                                        fieldType:'alphabet',
                                        fieldName: 'Name' 
                                },
                                {
                                        fieldValue: unit, 
                                        fieldType:'float', 
                                        fieldName: 'Unit' 
                                },
                                { 
                                        fieldValue: price, 
                                        fieldType:'float',
                                        fieldName: 'Price' 
                                },
                                {
                                        fieldValue: date, 
                                        fieldType:'date', 
                                        fieldName: 'Date' 
                                }
                        ]

        valid = await validateSchema(validateField) 

        if(valid == true)
        {
                try
                {
                        db.client.connect(err => {

                        db.client.db(db.dbName).collection('dFarm').
                        insertOne(req.body, function(err) {

                                if (err)
                                {
                                        throw err;
                                }
                                console.log("1 document inserted");
                                        res.
                                        status(200).
                                        json({ Message: 'Success' })
                              });


                        })
                }
                catch(e)
                {
                        res.
                        status(405).
                        json({ Message: 'Success' })
                }
        }
        else
        {
                res.
                status(400).
                json({ errorMessages: valid })
               
        }             

        

//      db.client.connect(err => {

//         const Transactions = db.client.db(db.dbName).collection('Transactions')
//         const Transactions_Items = db.client.db(db.dbName).collection('Transactions_Items')

//         const cursor = Transactions.
//         aggregate(
//         [
//          {
//             $lookup:
//               {
//                   from: "Transactions_Items",
//                   localField: "items",
//                   foreignField: "_id",
//                   as: "Items"
//               }
//           },
          
//           {
//           $project : {  
//                         items: 0, 
//                       }
//           }
//         ]
//         )
      
//         cursor.forEach(function(doc)
//         {
//           res.
//           status(200).
//           json({ results: doc })
//         })
 
// })

}
