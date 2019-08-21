const MongoClient = require('mongodb').MongoClient;
const connectionUrl = 'mongodb://user:password1@ds231559.mlab.com:31559/title-search';

module.exports = MongoClient.connect(connectionUrl).then(db => db.db('title-search'));
