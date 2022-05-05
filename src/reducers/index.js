import { combineReducers } from 'redux';

import userReducer from './user';
import appReducer from './app';
import homeReducer from './home';
;
const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  home: homeReducer,
});

export default rootReducer;
