import { spawn } from 'redux-saga/effects';

export default function* rootSaga() {
    try {
        yield spawn();

    } catch (e) {
        console.log('error in rootSaga ', e);
    }
}
