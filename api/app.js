const express = require('express');
const dotenv = require('dotenv');
const scheduler = require('./scheduler');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World 👋');
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  };

  scheduler();
  console.log(`🚀 App is running on port ${PORT}...`);
});