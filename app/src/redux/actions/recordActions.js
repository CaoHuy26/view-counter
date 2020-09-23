import ActionTypes from './types';

const recordActions = {
  getRecords: (page) => {
    return {
      type: ActionTypes.RECORD_FETCH_REQUEST,
      page
    }
  },
  getRecordOfToday: (today) => {
    return {
      type: ActionTypes.RECORD_TODAY_FETCH_REQUEST,
      today
    }
  }
};

export default recordActions;