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
  const db = client.db('count_view');

  app.get('/', async (req, res) => {
    const { time } = req.query;

    if (!time) {
      return res.send('Missing time');
    }
    try {
      const result = await db.collection('records')
        .findOne({ time })
      
      if (!result) {
        res.send('Not found');
      }

      res.status(200).json(result);
    }
    catch (error) {
      res.send(error);
    }
  });
  
  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }
  
    scheduler();
    console.log(`🚀 App is running on port ${PORT}...`);
  });
});