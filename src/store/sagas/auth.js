import { call, put } from 'redux-saga/effects';
import { signInSuccess, signInFailure, signUpSuccess, signUpFailure } from '../actions/auth';
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
    yield put(signInFailure(err.message));
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;
  try {
    yield call(api.post, '/users', { 
      name,
      email,
      password 
    });
    yield put(signUpSuccess());    
  } catch (err) {
    yield put(signUpFailure(err.message));  
  }  
}