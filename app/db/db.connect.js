

// const MongoClient = require('mongodb').MongoClient;
// const feedSchema = require('../models/feed')
// const uri = "mongodb+srv://test:test@cluster0-jwiv8.mongodb.net/test?retryWrites=true&w=majority";
// // const uri = "mongodb+srv://cluster0-ahntq.mongodb.net/test" --username testuser

// const client = new MongoClient(uri, { useUnifiedTopology: true });

// const dbName = 'DFARM'


// try
// {
//     client.
//     connect(err => {
    
//         client.
//         db("DFARM").collection().col

//         client.close();
//     }
//     );
// }
// catch(e)
// {
//     console.log(e)
// }


// module.exports = { client, dbName }
 

const express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://test:test@cluster0-jwiv8.mongodb.net/test?retryWrites=true&w=majority";



mongoose.connect(uri,{
  useNewUrlParser: true
});

