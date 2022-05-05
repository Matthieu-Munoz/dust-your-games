import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from '@/reducers';
import boardgameatlasApiMiddleWare from '../middlewares/boardgameatlasApi';
import globalMiddleWare from '@/middlewares/global';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(boardgameatlasApiMiddleWare, globalMiddleWare),
);

const store = createStore(reducer, enhancers);

export default store;
