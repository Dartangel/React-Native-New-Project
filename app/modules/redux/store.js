import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'
import rootReducer from '.';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];
const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };