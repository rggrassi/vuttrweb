import { call, put } from 'redux-saga/effects';
import { signInSuccess } from '../actions/auth';
import api from '../../services/api';
import history from '../../services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;           

  try {        
    const response = yield call(api.post, '/session', { email, password });    
    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    console.log("error:", err);
  }
}