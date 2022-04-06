import { takeLatest, all, call, put, take } from 'redux-saga/effects';
import { LOGIN_USER_STARTS } from './types';
import {
  loginUserSuccess,
  loginUserFailed,
  registerUserSuccess,
  registerUserFailed,
} from './user.actions';
const axios = require('axios');

export function* loginAsync({ payload }) {
  try {
    const res = yield axios.post('http://localhost:4500/api/v1/user/signin', payload);
    console.log('LOGIN', res.data.user);
    yield put(loginUserSuccess(res.data.user));
  } catch (err) {
    yield put(loginUserFailed(err));
  }
}

export function* onLoginUser() {
  yield takeLatest(LOGIN_USER_STARTS, loginAsync);
}

export function* userSaga() {
  yield all([call(onLoginUser)]);
}
