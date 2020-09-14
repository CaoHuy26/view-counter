const connection = require('./connect');

const create = (data) => {
  connection((err, client) => {
    if (err) {
      throw err;
    }
  
    const db = client.db('count_view');
  
    try {
      db.collection('records').insertOne(data);
      // console.log('Create record success');
    }
    catch (error) {
      console.log(error);
    }
  });
};

module.exports.create = create;