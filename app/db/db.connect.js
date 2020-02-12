

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://test:test@cluster0-jwiv8.mongodb.net/test?retryWrites=true&w=majority";
// const uri = "mongodb+srv://cluster0-ahntq.mongodb.net/test" --username testuser

const client = new MongoClient(uri, { useUnifiedTopology: true });

const dbName = 'DFARM'


module.exports = { client, dbName }
 
