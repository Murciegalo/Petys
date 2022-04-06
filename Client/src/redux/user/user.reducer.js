import {
  LOGIN_USER_STARTS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  SIGNUP_USER_STARTS,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILED,
} from './types';

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER_STARTS:
    case SIGNUP_USER_STARTS:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case LOGIN_USER_FAILED:
    case SIGNUP_USER_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
