const MongoClient = require('mongodb').MongoClient;
const connectionUrl = process.env.DB_URL || 'mongodb://mongodb0.example.com:27017/title-search';

module.exports = MongoClient.connect(connectionUrl).then(db => db.db('title-search'));
