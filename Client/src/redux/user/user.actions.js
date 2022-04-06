import {
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from './types';
import dispatch from 'redux';

export const loginUserSuccess = () => {
  dispatch({ type: LOGIN_USER_SUCCESS });
};

export const loginUserFailed = () => {
  dispatch({ type: LOGIN_USER_FAILED });
};

export const registerUserSuccess = () => {
  dispatch({ type: REGISTER_USER_SUCCESS });
};

export const registerUserFailed = () => {
  dispatch({ type: REGISTER_USER_FAILED });
};
