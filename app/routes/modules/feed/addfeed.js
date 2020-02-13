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

                        db.
                        client.
                        db(db.dbName).
                        collection('Feed').
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


}
