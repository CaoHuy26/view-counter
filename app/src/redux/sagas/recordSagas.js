import { put, takeLatest } from 'redux-saga/effects';
import ActionTypes from '../actions/types';
import recordAPI from '../../api/recordAPI';

function* fetchRecord(payload) {
  try {
    const { page } = payload;
    
    const res = yield recordAPI.getRecords(page);
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