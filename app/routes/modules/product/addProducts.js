// const db = require('../../db/db.connect')
const assert = require('assert')


module.exports = function (req,res,next)
{
            db.client.connect(err =>
            {

                    const { fromDate, toDate } = req.body
                    const Transactions =  db.
                                          client.
                                          db(db.dbName).
                                          collection('Transactions')


                    
                      Transactions.
                      insertOne({ fromDate: fromDate, toDate: toDate }).
                      then(value =>
                        {
                          console.
                          log(value)
                          
                          res.
                          status(201). 
                          json({ result: 'success' })
                        
                      }).
                      catch((e)=>
                      {
                          res.
                          status(400). 
                          json({error:e})
                      })
                      
                   
                    
                } 
                
            )

      
}