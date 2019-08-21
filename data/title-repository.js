const connection = require('./connection');


const collection = connection.then(db => {
  return db.collection('Title');
});

module.exports = {
  async save(url, title) {
    return (await collection).insertOne({url, title})
  },

  async getByUrl(url) {
    return (await collection).findOne({url})
  }
};
