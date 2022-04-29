import { createAction } from '../../utils/reducer.utils';
import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REMOVE_ALERT,
  ACTIVE_USER_SUCCESS,
  ACTIVE_USER_FAILED,
  ACTIVE_USER_START,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_PASSWORD_START,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILED,
} from './types';

export const activeUserStart = () => createAction(ACTIVE_USER_START);
export const activeUserSuccess = (payload) => createAction(ACTIVE_USER_SUCCESS, payload);
export const activeUserFailed = (payload) => createAction(ACTIVE_USER_FAILED, payload);

export const loginStart = (email, password) => createAction(LOGIN_USER_START, { email, password });
export const loginUserSuccess = (payload) => createAction(LOGIN_USER_SUCCESS, payload);
export const loginUserFailed = (payload) => createAction(LOGIN_USER_FAILED, payload);

export const logoutStart = () => createAction(LOGOUT_USER_START);
export const logoutUserSuccess = () => createAction(LOGOUT_USER_SUCCESS);
export const logoutUserFailed = (payload) => createAction(LOGOUT_USER_FAILED, payload);

export const registerStart = (inputData) => createAction(REGISTER_USER_START, inputData);
export const registerUserSuccess = (payload) => createAction(REGISTER_USER_SUCCESS, payload);
export const registerUserFailed = (payload) => createAction(REGISTER_USER_FAILED, payload);

export const updateUserStart = (inputData) => createAction(UPDATE_USER_START, inputData);
export const updateUserSuccess = (payload) => createAction(UPDATE_USER_SUCCESS, payload);
export const updateUserFailed = (payload) => createAction(UPDATE_USER_FAILED, payload);

export const updateUserPaswordStart = (inputData) =>
  createAction(UPDATE_USER_PASSWORD_START, inputData);

export const updateUserPaswordSuccess = (payload) =>
  createAction(UPDATE_USER_PASSWORD_SUCCESS, payload);

export const updateUserPaswordFailed = (payload) =>
  createAction(UPDATE_USER_PASSWORD_FAILED, payload);

export const removeAlert = () => createAction(REMOVE_ALERT);
