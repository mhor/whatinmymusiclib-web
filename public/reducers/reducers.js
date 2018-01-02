import { combineReducers } from 'redux';
import TracksReducer from './tracks';

const rootReducer = combineReducers({
  track: TracksReducer,
});

export default rootReducer;
