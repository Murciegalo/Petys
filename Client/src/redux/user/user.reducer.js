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
  token: '',
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
        user: payload.user,
        role: payload.user.role,
        token: payload.token,
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
        token: '',
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
        token: '',
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
