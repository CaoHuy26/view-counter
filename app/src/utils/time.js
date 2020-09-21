import moment from 'moment';

const getCurrentDate = () => {
  return moment().format('DD/MM/YYYY');
};

const getCurrentTime = () => {
  return moment().format('LTS');
};

export {
  getCurrentDate,
  getCurrentTime
};