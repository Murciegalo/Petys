import { GET_ALL_PETS_STARTS, GET_ALL_PETS_FAILED, GET_ALL_PETS_SUCCESS } from './types';

const INITIAL_STATE = {
  pets: null,
  loading: false,
  error: null,
  alert: false,
};

export const petReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PETS_STARTS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PETS_SUCCESS:
      return {
        error: null,
        alert: false,
        pets: payload,
        loading: false,
      };
    case GET_ALL_PETS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
