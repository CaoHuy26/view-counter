import axios from 'axios';

const recordAPI = {
  getRecords: async (page) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/records?page=${page}`);
  },
  getRecordOfToday: async (today) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/?date=${today}`);
  }
};

export default recordAPI;