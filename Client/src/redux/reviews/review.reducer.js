import {
  GET_ALL_PET_REVIEWS_STARTS,
  GET_ALL_PET_REVIEWS_SUCCESS,
  GET_ALL_PET_REVIEWS_FAILED,
} from './types';

const INITIAL_STATE = {
  rev: null,
  isLoad: false,
  error: null,
  alert: false,
};

export const reviewReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PET_REVIEWS_STARTS:
      return {
        ...state,
        isLoad: true,
      };
    case GET_ALL_PET_REVIEWS_SUCCESS:
      return {
        ...state,
        rev: payload,
        isLoad: false,
      };
    case GET_ALL_PET_REVIEWS_FAILED:
      return {
        ...state,
        isLoad: false,
        error: payload,
      };
    default:
      return state;
  }
};
