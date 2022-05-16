import { combineReducers } from 'redux';

import userReducer from './user';
import appReducer from './app';
import homeReducer from './home';
import accountReducer from './account';
import dashboardReducer from './dashboard';
import contactReducer from './contact';

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  home: homeReducer,
  account: accountReducer,
  dashboard: dashboardReducer,
  contact: contactReducer,
});

export default rootReducer;
