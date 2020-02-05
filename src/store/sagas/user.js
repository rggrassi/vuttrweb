import { call, put } from 'redux-saga/effects';
import { updateProfileSuccess, updateProfileFailure } from '../actions/user';
import api from '../../services/api';

export function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;
  const profile = Object.assign({ name, email }, rest.oldPassword ? rest : {});
  try {
    const response = yield call(api.put, '/users', profile);
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    console.log(err);
    yield put(updateProfileFailure());
  }
}