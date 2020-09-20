const moment = require('moment');

const getCurrentDate = () => {
  return moment().format('DD/MM/YYYY');
};

const getCurrentTime = () => {
  return moment().format('LTS');
};

const getYesterday = () => {
  return moment().subtract(1, 'days').startOf('day').format('DD/MM/YYYY');
};


module.exports.getCurrentDate = getCurrentDate;
module.exports.getCurrentTime = getCurrentTime;
module.exports.getYesterday = getYesterday;