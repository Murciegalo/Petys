import { takeLatest, all, call, put } from 'redux-saga/effects';
import { GET_ALL_PET_REVIEWS_STARTS } from './types';
import { getPetReviewsFailed, getPetReviewsSuccess } from './review.actions';
const axios = require('axios');

export function* getPetReviewsAsync({ payload }) {
  try {
    const res = yield axios.get(`http://localhost:4500/api/v1/pets/${payload}/reviews`);
    yield put(getPetReviewsSuccess(res));
  } catch (err) {
    yield put(getPetReviewsFailed(err.response.data));
  }
}
export function* onGetReviews() {
  yield takeLatest(GET_ALL_PET_REVIEWS_STARTS, getPetReviewsAsync);
}

export function* reviewSaga() {
  yield all([call(onGetReviews)]);
}
