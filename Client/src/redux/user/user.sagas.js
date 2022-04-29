import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  ACTIVE_USER_STARTS,
  LOGIN_USER_STARTS,
  LOGOUT_USER_START,
  REGISTER_USER_STARTS,
  UPDATE_USER_STARTS,
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
} from './user.actions';
import axios from '../../api/axios';

export function* activeSessionAsync() {
  try {
    const res = yield axios.get('/user/isAuth');
    yield put(activeUserSuccess(res.data));
  } catch (err) {
    yield put(activeUserFailed(err.response.data || err));
  }
}
export function* onActiveUserSession() {
  yield takeLatest(ACTIVE_USER_STARTS, activeSessionAsync);
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
  yield takeLatest(REGISTER_USER_STARTS, registerAsync);
}

export function* loginAsync({ payload }) {
  try {
    const res = yield axios.post('/user/signin', payload);
    yield put(loginUserSuccess(res.data));
  } catch (err) {
    yield put(loginUserFailed(err.response.data || err));
  }
}
export function* onLoginUser() {
  yield takeLatest(LOGIN_USER_STARTS, loginAsync);
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
  yield takeLatest(UPDATE_USER_STARTS, updateUserAsync);
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
  ]);
}
