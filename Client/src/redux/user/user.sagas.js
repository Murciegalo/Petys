import { takeLatest, all, call, put } from 'redux-saga/effects';
import { LOGIN_USER_STARTS, LOGOUT_USER_START, REGISTER_USER_STARTS } from './types';
import {
  registerUserSuccess,
  registerUserFailed,
  loginUserSuccess,
  loginUserFailed,
  logoutUserSuccess,
  logoutUserFailed,
} from './user.actions';
const axios = require('axios');

export function* registerAsync({ payload }) {
  try {
    const res = yield axios.post('http://localhost:4500/api/v1/user/signup', payload);
    console.log('Regsiter', res.data.user);
    yield put(registerUserSuccess(res.data.user));
  } catch (err) {
    yield put(registerUserFailed(err.response.data));
  }
}
export function* onRegisterUser() {
  yield takeLatest(REGISTER_USER_STARTS, registerAsync);
}

export function* loginAsync({ payload }) {
  try {
    const res = yield axios.post('http://localhost:4500/api/v1/user/signin', payload);
    yield put(loginUserSuccess(res.data.user));
  } catch (err) {
    yield put(loginUserFailed(err.response.data));
  }
}
export function* onLoginUser() {
  yield takeLatest(LOGIN_USER_STARTS, loginAsync);
}

export function* logoutAsync() {
  try {
    const res = yield axios.get('http://localhost:4500/api/v1/user/logout');
    yield put(logoutUserSuccess(res));
  } catch (err) {
    yield put(logoutUserFailed(err.response.data));
  }
}
export function* onLogoutUser() {
  yield takeLatest(LOGOUT_USER_START, logoutAsync);
}

export function* userSaga() {
  yield all([call(onLoginUser), call(onRegisterUser), call(onLogoutUser)]);
}
