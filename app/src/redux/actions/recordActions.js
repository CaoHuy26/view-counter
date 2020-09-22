import ActionTypes from './types';

const recordActions = {
  getRecords: (page) => {
    return {
      type: ActionTypes.RECORD_FETCH_REQUEST,
      page
    }
  }
};

export default recordActions;