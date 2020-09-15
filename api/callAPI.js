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

const getViewOfYesterday = async (yesterday) => {
  let viewOfYesterday;
  const res = await axios.get(`https://git-counter-api.glitch.me?date=${yesterday}`);

  if (res.data === 'Not found') {
    return viewOfYesterday = 0;
  }
  
  const { view } = res.data;
  return viewOfYesterday = view;
};

module.exports.getCurrentView = getCurrentView;
module.exports.getViewOfYesterday = getViewOfYesterday;