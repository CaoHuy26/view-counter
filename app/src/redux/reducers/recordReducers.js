import ActionTypes from '../actions/types';

const initialState = {
  isLoading: false,
  success: false,
  numberOfRecords: 1,
  records: [],
  error: null
};

const recordReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.RECORD_FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case ActionTypes.RECORD_FETCH_SUCCEEDED: {
      const { numberOfRecords, records } = action.payload;

      return {
        ...state,
        isLoading: false,
        success: true,
        numberOfRecords,
        records,
        error: null
      }
    }
    case ActionTypes.RECORD_FETCH_FAILED: {
      return {
        ...state,
        isLoading: false,
        success: false,
        error: true // Change error to error message
      }
    }

    default:
      return state;
  }
};

export default recordReducers;