import { takeLatest, all, call, put } from 'redux-saga/effects';
import { GET_ALL_PET_REVIEWS_STARTS } from './types';
import { getPetReviewsFailed, getPetReviewsSuccess } from './review.actions';
import axios from '../../api/axios';

export function* getPetReviewsAsync(payload) {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${payload.payload.token}`,
  //     'Content-type': 'application/json',
  //   },
  // };
  try {
    const res = yield axios.get(`/pets/${payload.payload.itemId}/reviews`);
    yield put(getPetReviewsSuccess(res));
  } catch (err) {
    console.log(err);
    yield put(getPetReviewsFailed(err.response.data));
  }
}
export function* onGetReviews() {
  yield takeLatest(GET_ALL_PET_REVIEWS_STARTS, getPetReviewsAsync);
}

export function* reviewSaga() {
  yield all([call(onGetReviews)]);
}
