import { GET_ALL_REVIEWS_STARTS, GET_ALL_REVIEWS_SUCCESS, GET_ALL_REVIEWS_FAIL } from './types';

const INITIAL_STATE = {
  reviews: null,
  review: null,
  loading: false,
  error: null,
};

export const reviewsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_REVIEWS_STARTS:
      return {
        reviews: null,
        review: null,
        loading: true,
        error: null,
      };
    case GET_ALL_REVIEWS_SUCCESS:
      return {
        reviews: payload,
        review: null,
        loading: false,
        error: null,
      };

    case GET_ALL_REVIEWS_FAIL:
      return {
        reviews: null,
        review: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
