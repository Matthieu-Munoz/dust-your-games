import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from '@/reducers';
import boardgameatlasApiMiddleWare from '../middlewares/boardgameatlasApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(boardgameatlasApiMiddleWare),
);

const store = createStore(reducer, enhancers);

export default store;
