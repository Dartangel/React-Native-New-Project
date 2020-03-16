import { spawn } from 'redux-saga/effects';
import { registration } from './actions/action'

export default function* rootSaga() {
    try {
        // yield spawn(registration);

    } catch (e) {
        console.log('error in rootSaga ', e);
    }
}