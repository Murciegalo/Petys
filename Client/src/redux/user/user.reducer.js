import {
  LOGIN_USER_STARTS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER_STARTS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  REMOVE_ALERT,
} from './types';

const INITIAL_STATE = {
  user: null,
  role: '',
  profile: null,
  isAuth: false,
  loading: false,
  error: null,
  alert: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER_STARTS:
    case REGISTER_USER_STARTS:
      return {
        ...state,
        user: null,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        role: payload?.role,
        isAuth: true,
        loading: false,
        error: null,
      };
    case LOGOUT_USER_START:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        role: '',
        profile: null,
        isAuth: false,
        loading: false,
        error: null,
        alert: false,
      };
    case LOGIN_USER_FAILED:
    case REGISTER_USER_FAILED:
    case LOGOUT_USER_FAILED:
      return {
        ...state,
        user: null,
        role: '',
        isAuth: false,
        loading: false,
        error: payload,
        alert: true,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: false,
      };
    default:
      return state;
  }
};
