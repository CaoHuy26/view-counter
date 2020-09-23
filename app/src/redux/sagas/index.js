import { all } from 'redux-saga/effects';
import { fetchRecordOfTodayWatcher, fetchRecordWatcher } from './recordSagas';

function* rootSaga() {
  yield all([
    fetchRecordWatcher(),
    fetchRecordOfTodayWatcher()
  ]);
};

export default rootSaga;