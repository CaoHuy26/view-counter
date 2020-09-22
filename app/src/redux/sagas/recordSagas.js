import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import ActionTypes from '../actions/types';

function* fetchRecord(payload) {
  try {
    const { page } = payload;
    
    const res = yield axios.get(`${process.env.REACT_APP_API_URL}/records?page=${page}`);
    const { data } = res;
    yield put({
      type: ActionTypes.RECORD_FETCH_SUCCEEDED,
      payload: data
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.RECORD_FETCH_FAILED,
      error
    });
  }
};


function* fetchRecordWatcher() {
  yield takeLatest(ActionTypes.RECORD_FETCH_REQUEST, fetchRecord);
};

export {
  fetchRecordWatcher
};