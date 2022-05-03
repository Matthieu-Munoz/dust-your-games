import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
// on importe notre middleware
import boardgameatlasApiMiddleWare from '../middlewares/boardgameatlasApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // on le branche sur le store
  applyMiddleware(boardgameatlasApiMiddleWare),
);

const store = createStore(reducer, enhancers);

export default store;
