const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const scheduler = require('./scheduler');
// const db = require('./lowdb');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

MongoClient.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if (err) {
    throw err;
  }

  const db = client.db('count_view');

  console.log('✅ MongoDB connected...');

  app.get('/', async (req, res) => {
    db.collection('records').find({}).toArray((err, results) => {
      results.forEach(result => {
        console.log(result)
      })
    });
    res.send('Hello World 👋');
  });
  
  // app.get('/view', (req, res) => {
  //   const { time } = req.query;
    
  //   const result = db.get('records')
  //     .find({
  //       time
  //     })
  //     .value();
    
  //   console.log(result)
  
  //   res.send(time);
  // });
  
  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }
  
    // scheduler();
    console.log(`🚀 App is running on port ${PORT}...`);
  });
});