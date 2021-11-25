import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// creating store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export store
export default store;
