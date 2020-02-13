const db = require('../../../db/db.connect')
var ObjectId = require('mongodb').ObjectID;
const  validateSchema  = require('../../../validations/validations')


module.exports = async (req, res, next )  =>
{        

        

     db.
     client.
     connect((err) => {

        db.
        client.
        db(db.dbName).
        collection('dFarm').
        aggregate(
                [
                  { $project : { _id: 0 } },
                ],
                ).
        toArray((err, items) => {

                res.
                status(200).
                json({ data: items })

        })       
 
        })


}
