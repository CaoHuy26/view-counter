const dotenv = require('dotenv');
const axios = require('axios');
const generateUserCode = require('./generateUserCode');

dotenv.config();

const getCurrentView = async (username) => {
  const userCode = generateUserCode(username);
  const res = await axios.get(`${process.env.API_URL}/${userCode}`);
  const { value } = res.data;

  return value;
};

module.exports.getCurrentView = getCurrentView;