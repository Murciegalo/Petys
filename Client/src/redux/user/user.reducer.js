import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  REMOVE_ALERT,
  ACTIVE_USER_START,
  ACTIVE_USER_SUCCESS,
  ACTIVE_USER_FAILED,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_PASSWORD_START,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILED,
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
    case UPDATE_USER_PASSWORD_START:
    case UPDATE_USER_START:
    case ACTIVE_USER_START:
    case LOGIN_USER_START:
    case REGISTER_USER_START:
    case LOGOUT_USER_START:
      return {
        ...state,
        loading: true,
      };
    case ACTIVE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        role: payload.user.role,
        token: payload.token,
        isAuth: payload.auth,
      };
    case UPDATE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        role: payload.user.role,
        token: payload.token,
        isAuth: payload.auth,
      };
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        role: payload.user.role,
        token: payload.token,
        isAuth: payload.auth,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.data.user,
        role: payload.data.user.role,
        isAuth: payload.data.auth,
        error: null,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        token: '',
        role: '',
        isAuth: false,
        loading: false,
        error: null,
      };
    case LOGIN_USER_FAILED:
    case REGISTER_USER_FAILED:
    case LOGOUT_USER_FAILED:
    case ACTIVE_USER_FAILED:
    case UPDATE_USER_FAILED:
    case UPDATE_USER_PASSWORD_FAILED:
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
