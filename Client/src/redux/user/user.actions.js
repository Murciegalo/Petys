import { createAction } from '../../utils/reducer.utils';
import {
  LOGIN_USER_STARTS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER_START,
  REGISTER_USER_STARTS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REMOVE_ALERT,
} from './types';

export const loginStart = (email, password) => createAction(LOGIN_USER_STARTS, { email, password });

export const loginUserSuccess = (payload) => createAction(LOGIN_USER_SUCCESS, payload);

export const loginUserFailed = (payload) => createAction(LOGIN_USER_FAILED, payload);

export const logoutStart = () => createAction(LOGOUT_USER_START);

export const logoutUserSuccess = () => createAction(LOGIN_USER_SUCCESS);

export const logoutUserFailed = (payload) => createAction(LOGIN_USER_FAILED, payload);

export const registerStart = (inputData) => createAction(REGISTER_USER_STARTS, inputData);

export const registerUserSuccess = (payload) => createAction(REGISTER_USER_SUCCESS, payload);

export const registerUserFailed = (payload) => createAction(REGISTER_USER_FAILED, payload);

export const removeAlert = () => createAction(REMOVE_ALERT);
