const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const connection = (callback) => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  MongoClient.connect(process.env.URI, options, callback);
};

module.exports = connection;