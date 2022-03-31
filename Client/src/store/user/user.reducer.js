import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_STARTS,
  REGISTER_STARTS,
  // GET_PROFILE,
  // PROFILE_ERROR,
  // UPDATE_PROFILE,
  ACCOUNT_DELETED,
} from './types';

const INITIAL_STATE = {
  data: null,
  token: '',
  isAuth: false,
  loading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_STARTS:
    case REGISTER_STARTS:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: payload.data.user,
        token: payload.data.token,
        isAuth: true,
        loading: false,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      return {
        ...state,
        error: payload,
        currentUser: null,
        token: '',
        isAuth: false,
        loading: false,
      };
    default:
      return state;
  }
};
