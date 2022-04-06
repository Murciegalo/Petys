import {
  LOGIN_USER_STARTS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER_START,
  REGISTER_USER_STARTS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from './types';

export const loginStart = (data) => {
  return {
    type: LOGIN_USER_STARTS,
    payload: data,
  };
};
export const loginUserSuccess = (payload) => {
  return { type: LOGIN_USER_SUCCESS, payload };
};

export const loginUserFailed = (payload) => {
  return { type: LOGIN_USER_FAILED, payload };
};

export const logoutStart = () => {
  return {
    type: LOGOUT_USER_START,
  };
};

export const registerStart = () => {
  return {
    type: REGISTER_USER_STARTS,
  };
};

export const registerUserSuccess = (payload) => {
  return { type: REGISTER_USER_SUCCESS, payload };
};

export const registerUserFailed = (payload) => {
  return { type: REGISTER_USER_FAILED, payload };
};
