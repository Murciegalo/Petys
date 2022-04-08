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
} from './types';

const INITIAL_STATE = {
  user: null,
  isAuth: false,
  loading: false,
  error: null,
  profile: null,
  msg: '',
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER_STARTS:
    case REGISTER_USER_STARTS:
    case LOGOUT_USER_START:
      return {
        ...state,
        user: null,
        isAuth: false,
        loading: true,
        error: null,
        profile: null,
      };
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuth: true,
        loading: false,
        error: null,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        isAuth: false,
        loading: false,
        error: null,
        msg: payload,
      };
    case LOGIN_USER_FAILED:
    case REGISTER_USER_FAILED:
    case LOGOUT_USER_FAILED:
      return {
        ...state,
        isAuth: false,
        user: null,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
