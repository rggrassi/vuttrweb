import { all, takeLatest } from 'redux-saga/effects';
import { SIGNIN_REQUEST } from '../actions/types';
import { signIn } from './auth';

export default function* rootSaga() {
    return yield all([
        takeLatest(SIGNIN_REQUEST, signIn)
    ]);
}