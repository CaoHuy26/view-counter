const dotenv = require('dotenv');
const axios = require('axios');
const generateUserCode = require('../utils/generateUserCode');

dotenv.config();

const getCurrentView = async (username) => {
  const userCode = generateUserCode(username);
  const res = await axios.get(`${process.env.API_URL}/${userCode}`);
  const { value } = res.data;

  return value;
};

const getViewOfYesterday = async (yesterday) => {
  let viewOfYesterday;
  const res = await axios.get(`${process.env.APP_URL}?date=${yesterday}`);

  if (res.data === 'Not found') {
    return viewOfYesterday = 0;
  }
  
  const { view } = res.data;
  return viewOfYesterday = view;
};

const wakeGlitchUp = async () => {
  await axios.get(`${process.env.APP_URL}`);
};

module.exports.getCurrentView = getCurrentView;
module.exports.getViewOfYesterday = getViewOfYesterday;
module.exports.wakeGlitchUp = wakeGlitchUp;