import { takeLatest, all, call, put } from 'redux-saga/effects';
import { GET_ALL_PET_REVIEWS_STARTS } from './types';
import { getPetReviewsFailed, getPetReviewsSuccess } from './review.actions';
const axios = require('axios');

export function* getAllPetReviewsAsync(petId) {
  try {
    const res = yield axios.get(`http://localhost:4500/api/v1/pets/${petId}/reviews`);
    yield put(getPetReviewsSuccess(res));
  } catch (err) {
    yield put(getPetReviewsFailed(err.response.data));
  }
}
export function* onGetReviews() {
  yield takeLatest(GET_ALL_PET_REVIEWS_STARTS, getAllPetReviewsAsync);
}

export function* reviewsSaga() {
  yield all([call(onGetReviews)]);
}
