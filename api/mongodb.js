const connection = require('./connect');
const { DB_DATABASE, DB_COLLECTION } = require('./constant');

const create = (data) => {
  connection((err, client) => {
    if (err) {
      throw err;
    }
  
    const db = client.db(DB_DATABASE);
  
    try {
      db.collection(DB_COLLECTION).insertOne(data);
      // console.log('Create record success');
    }
    catch (error) {
      console.log(error);
    }
  });
};

module.exports.create = create;