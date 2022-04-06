import { takeLatest, all, call, put, take } from 'redux-saga/effects';
import { LOGIN_USER_STARTS } from './types';
import {
  loginUserSuccess,
  loginUserFailed,
  registerUserSuccess,
  registerUserFailed,
} from './user.actions';

export function* loginUser() {
  try {
  } catch (err) {}
}

export function* onLoginUser() {
  yield takeLatest(LOGIN_USER_STARTS, loginUser);
}

export function* userSaga() {
  yield all([]);
}
