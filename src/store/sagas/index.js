import { all, takeLatest } from 'redux-saga/effects';
import { 
    SIGNIN_REQUEST, 
    SIGNIN_SUCCESS,
} from '../actions/types';


export default function* rootSaga() {
    return yield all([
        /*takeLatest('persist/REHYDRATE', auth),
        takeLatest(SIGNIN_REQUEST, signIn),
        takeLatest(SIGNIN_SUCCESS, auth),*/
    ]);
}