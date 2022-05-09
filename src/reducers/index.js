import { combineReducers } from 'redux';

import userReducer from './user';
import appReducer from './app';
import homeReducer from './home';
import accountReducer from './account'
;
const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  home: homeReducer,
  account: accountReducer,
});

export default rootReducer;
