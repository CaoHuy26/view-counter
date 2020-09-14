const moment = require('moment');

const getCurrentDate = () => {
  return moment().format('DD/MM/YYYY');
};

const getCurrentTime = () => {
  return moment().format('LTS');
};

module.exports.getCurrentDate = getCurrentDate;
module.exports.getCurrentTime = getCurrentTime;