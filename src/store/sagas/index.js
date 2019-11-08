import { all, takeLatest } from 'redux-saga/effects';
import { SIGNIN_REQUEST, SIGNUP_REQUEST } from '../actions/types';
import { signIn, signUp } from './auth';

export default function* rootSaga() {
    return yield all([
        takeLatest(SIGNIN_REQUEST, signIn),
        takeLatest(SIGNUP_REQUEST, signUp)
    ]);
}