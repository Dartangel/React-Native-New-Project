import { combineReducers } from 'redux';
import reducer from './reducer'
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

//const language = () => { return { test: 'test' } };

const registerPersistConfig = {
    key: 'register',
    storage: AsyncStorage,
    timeout: null,
    whitelist: [
        'users'
    ],
};

const rootReducer = combineReducers({
    registration: persistReducer(registerPersistConfig,
        reducer)
})

export default rootReducer;