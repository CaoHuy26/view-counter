import { combineReducers } from 'redux';
import recordReducers from './records';

const reducers = combineReducers({
  records: recordReducers
});

export default reducers;