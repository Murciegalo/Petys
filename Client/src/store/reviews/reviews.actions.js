import axios from 'axios';
import { GET_ALL_REVIEWS_FAIL, GET_ALL_REVIEWS_STARTS, GET_ALL_REVIEWS_SUCCESS } from './types';

export const getAllReviews = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_REVIEWS_STARTS });
    const res = await axios.get(`http://localhost:4500/api/v1/pets/${itemId}/reviews`);
    console.log('REVIEWS', res);
    dispatch({
      type: GET_ALL_REVIEWS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_REVIEWS_FAIL,
      payload: error.response,
    });
  }
};
