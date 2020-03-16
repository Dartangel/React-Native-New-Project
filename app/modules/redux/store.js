import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage';
import rootSaga from './saga';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'username',
        'password'
    ],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [logger, sagaMiddleware];
const store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };