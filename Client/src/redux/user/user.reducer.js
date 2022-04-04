import {
  LOGIN_USER_STARTS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER_STARTS,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
} from './types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER_STARTS:
    case SIGNUP_USER_STARTS:
      return {
        ...state,
        currentUser: payload,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        loading: false,
      };
    case LOGIN_USER_FAIL:
    case SIGNUP_USER_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
