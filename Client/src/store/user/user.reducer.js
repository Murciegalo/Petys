import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_LOADING_FALSE,
  // GET_PROFILE,
  // PROFILE_ERROR,
  // UPDATE_PROFILE,
  ACCOUNT_DELETED,
} from './types';

const INITIAL_STATE = {
  currentUser: null,
  token: '',
  isAuth: false,
  loading: false,
  error: '',
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: payload.data.user,
        token: payload.data.token,
        isAuth: true,
        loading: true,
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
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
