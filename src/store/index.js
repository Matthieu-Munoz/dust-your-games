import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import reducer from '@/reducers';

// Middleware for the API Board Game Atlas
import boardgameatlasApiMiddleWare from '../middlewares/boardgameatlasApi';
import dygApiMiddleWare from '../middlewares/dygApi';
// Middleware with everything useful throught the entire app
import globalMiddleWare from '@/middlewares/global';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(boardgameatlasApiMiddleWare, dygApiMiddleWare, globalMiddleWare),
);

const store = createStore(reducer, enhancers);

export default store;
