import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  ACTIVE_USER_START,
  LOGIN_USER_START,
  LOGOUT_USER_START,
  REGISTER_USER_START,
  UPDATE_USER_PASSWORD_START,
  UPDATE_USER_START,
} from './types';
import {
  registerUserSuccess,
  registerUserFailed,
  loginUserSuccess,
  loginUserFailed,
  logoutUserSuccess,
  logoutUserFailed,
  activeUserSuccess,
  activeUserFailed,
  updateUserSuccess,
  updateUserFailed,
  updateUserPaswordSuccess,
  updateUserPaswordFailed,
} from './user.actions';
import axios from '../../api/axios';

export function* activeSessionAsync() {
  try {
    const res = yield axios.get('/user/isAuth');
    yield put(activeUserSuccess(res?.data));
  } catch (err) {
    yield put(activeUserFailed(err.response.data || err));
  }
}
export function* onActiveUserSession() {
  yield takeLatest(ACTIVE_USER_START, activeSessionAsync);
}

export function* registerAsync({ payload }) {
  try {
    const res = yield axios.post('/user/signup', payload);
    console.log('RESTING RES', res.data);
    yield put(registerUserSuccess(res.data));
  } catch (err) {
    yield put(registerUserFailed(err.response.data || err));
  }
}
export function* onRegisterUser() {
  yield takeLatest(REGISTER_USER_START, registerAsync);
}

export function* loginAsync({ payload }) {
  try {
    const res = yield axios.post('/user/signin', payload);
    yield put(loginUserSuccess(res?.data || res));
  } catch (err) {
    yield put(loginUserFailed(err.response.data || err));
  }
}
export function* onLoginUser() {
  yield takeLatest(LOGIN_USER_START, loginAsync);
}

export function* updateUserAsync({ payload }) {
  try {
    const res = yield axios.patch('/user/updateMe', payload);
    yield put(updateUserSuccess(res));
  } catch (err) {
    yield put(updateUserFailed(err.response.data || err));
  }
}
export function* onUpdateUser() {
  yield takeLatest(UPDATE_USER_START, updateUserAsync);
}

export function* updateUserPasswordAsync({ payload }) {
  try {
    const res = yield axios.patch('/user/updateMyPassword', payload);
    console.log('SAGA RES', res);
    yield put(updateUserPaswordSuccess(res.data));
  } catch (err) {
    yield put(updateUserPaswordFailed(err.response.data || err));
  }
}
export function* onUpdateUserPassword() {
  yield takeLatest(UPDATE_USER_PASSWORD_START, updateUserPasswordAsync);
}

export function* logoutAsync() {
  try {
    const res = yield axios.get('/user/logout');
    yield put(logoutUserSuccess(res));
  } catch (err) {
    yield put(logoutUserFailed(err.response.data || err));
  }
}
export function* onLogoutUser() {
  yield takeLatest(LOGOUT_USER_START, logoutAsync);
}

export function* userSaga() {
  yield all([
    call(onActiveUserSession),
    call(onRegisterUser),
    call(onLoginUser),
    call(onUpdateUser),
    call(onLogoutUser),
    call(onUpdateUserPassword),
  ]);
}
