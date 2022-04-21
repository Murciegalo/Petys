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
  ACTIVE_USER_STARTS,
  ACTIVE_USER_SUCCESS,
  ACTIVE_USER_FAILED,
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
    case ACTIVE_USER_STARTS:
    case LOGIN_USER_STARTS:
    case REGISTER_USER_STARTS:
    case LOGOUT_USER_START:
      return {
        ...state,
        loading: true,
      };
    case ACTIVE_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        // TO BE CONTINUED
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
    case ACTIVE_USER_FAILED:
      return {
        ...state,
        user: null,
        token: '',
        role: '',
        isAuth: false,
        loading: false,
        error: payload,
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
