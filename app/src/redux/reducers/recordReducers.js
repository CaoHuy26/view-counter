import ActionTypes from '../actions/types';

const initialState = {
  isLoading: false,
  idLoadingRecordOfToday: false,
  success: false,
  numberOfRecords: 1,
  records: [],
  record: {},
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
    case ActionTypes.RECORD_TODAY_FETCH_REQUEST: {
      return {
        ...state,
        idLoadingRecordOfToday: true
      }
    }
    case ActionTypes.RECORD_TODAY_FETCH_SUCCEEDED: {
      const { record } = action.payload;

      return {
        ...state,
        idLoadingRecordOfToday: false,
        success: true,
        record,
        error: null
      }
    }
    case ActionTypes.RECORD_FETCH_FAILED || ActionTypes.RECORD_TODAY_FETCH_FAILED: {
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