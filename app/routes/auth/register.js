
// const uri = require('../../db/db.connect')
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient();


module.exports = (req, res, next) => {


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

          res.
          status(200).
          json({success: true});


}