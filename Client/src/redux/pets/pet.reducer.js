import {
  GET_ALL_PETS_STARTS,
  GET_ALL_PETS_FAILED,
  GET_ALL_PETS_SUCCESS,
  GET_PET_REVIEWS_FAILED,
  GET_PET_REVIEWS_STARTS,
  GET_PET_REVIEWS_SUCCESS,
} from './types';

const INITIAL_STATE = {
  pets: null,
  reviews: null,
  loading: false,
  error: null,
  alert: false,
};

export const petReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PETS_STARTS:
    case GET_PET_REVIEWS_STARTS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PETS_SUCCESS:
      return {
        ...state,
        pets: payload,
        loading: false,
      };
    case GET_PET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: payload,
        loading: false,
      };
    case GET_PET_REVIEWS_FAILED:
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
