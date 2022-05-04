import { combineReducers } from 'redux';

import userReducer from './user';
import appReducer from './app'

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

export default rootReducer;
