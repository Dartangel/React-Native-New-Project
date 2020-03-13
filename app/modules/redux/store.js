import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './rootReducer.js';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage';
import rootSaga from './saga';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: null,
    whitelist: [

    ],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, logger, sagaMiddleware];
const store = createStore(
    persistedReducer,
    compose(composeWithDevTools(applyMiddleware(...middleware))),
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };