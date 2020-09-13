const express = require('express');
const dotenv = require('dotenv');
const scheduler = require('./scheduler');
const connection = require('./connect');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

connection((err, client) => {
  if (err) {
    throw err;
  }
  
  console.log('✅ MongoDB connected...');

  app.get('/', async (req, res) => {
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
  
    scheduler();
    console.log(`🚀 App is running on port ${PORT}...`);
  });
});