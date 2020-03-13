import { combineReducers } from 'redux';
import reducer from './reducer'

const language = () => { return { test: 'test' } };

const rootReducer = combineReducers({
    language, reducer
})

export default rootReducer;