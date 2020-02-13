const db = require('../../../db/db.connect')
var ObjectId = require('mongodb').ObjectID;
const  validateSchema  = require('../../../validations/validations')


module.exports = async (req, res, next )  =>
{
        const { price, tag, feedId } = req.body
    
        validateField = [
                                { 
                                        fieldValue: feedId, 
                                        fieldType:'required',
                                        fieldName: 'feedId' 
                                },
                                {
                                        fieldValue: tag, 
                                        fieldType:'float', 
                                        fieldName: 'tag' 
                                },
                                { 
                                        fieldValue: price, 
                                        fieldType:'float',
                                        fieldName: 'price' 
                                },

                        ]

        valid = await validateSchema(validateField) 

        if(valid == true)
        {
                try
                {
                        db.
                        client.
                        connect(err=> {

                                db.
                                client.
                                db(db.dbName).
                                collection('Animal').
                                insertOne(req.body, function(err,rec) {
        
                                        if (err)
                                        {
                                                throw err;
                                        }
                                        animalId = rec.insertedId
                                        console.log(animalId);

                                        db.
                                        client.
                                        db(db.dbName).
                                        collection('Feed').
                                        updateOne(
                                        { "_id": ObjectId("5e454a329ad10c37e2921422")},
                                        { $push:  {"animals": ObjectId(animalId) }  },
                                        )

                                        res.
                                        status(200).
                                        json({ Message: 'Success' })
                                });           
                                
        
                                })       
                        console.log('successly added')
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
