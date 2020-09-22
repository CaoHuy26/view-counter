import { all } from 'redux-saga/effects';
import { fetchRecordWatcher } from './recordSagas';

function* rootSaga() {
  yield all([
    fetchRecordWatcher()
  ]);
};

export default rootSaga;