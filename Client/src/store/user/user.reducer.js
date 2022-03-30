import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  // GET_PROFILE,
  // PROFILE_ERROR,
  // UPDATE_PROFILE,
  ACCOUNT_DELETED,
} from './types';

const INITIAL_STATE = {
  currentUser: null,
  token: '',
  isAuth: false,
  loading: true,
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
