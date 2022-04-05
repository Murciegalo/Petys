import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';

const initialState = {};

const middlewares = [thunk, logger];

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;
