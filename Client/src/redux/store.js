import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(
  Boolean,
);
const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
