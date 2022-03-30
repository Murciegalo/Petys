import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const initialState = {};

const middlewares = [logger, thunk];
const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, initialState, composeEnhancers);

export default store;
