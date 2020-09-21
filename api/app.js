const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const scheduler = require('./helper/scheduler');
const connection = require('./configs/connect');
const { DB_DATABASE, DB_COLLECTION } = require('./constants/constant');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.disable('etag');
app.use(cors());

connection((err, client) => {
  if (err) {
    throw err;
  }
  
  console.log('✅ MongoDB connected...');
  const db = client.db(DB_DATABASE);

  app.get('/', async (req, res) => {
    const { date } = req.query;

    if (!date) {
      return res.send('Missing date');
    }
    try {
      const record = await db.collection(DB_COLLECTION)
        .findOne({ date });
      
      if (!record) {
        return res.json({
          statusCode: 404,
          success: false,
          msg: 'Not Found'
        });
      }

      res.status(200).json({
        statusCode: 200,
        success: true,
        record
      });
    }
    catch (error) {
      res.send(error);
    }
  });

  app.get('/records', async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 7;
    const offset = page > 1 ? ((page - 1) * limit) : 0;
    
    // Tổng số bản ghi đang có
    const numberOfRecords = await db.collection(DB_COLLECTION).countDocuments();

    db.collection(DB_COLLECTION)
      .find({})
      .skip(offset)
      .limit(limit)
      .toArray((err, records) => {
        if (err) {
          res.json(err);
        }

        res.status(200).json({
          statusCode: 200,
          sucess: true,
          numberOfRecords,
          page,
          offset,
          limit,
          records
        });
      });
  });
  
  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }
  
    // scheduler();
    console.log(`🚀 App is running on port ${PORT}...`);
  });
});