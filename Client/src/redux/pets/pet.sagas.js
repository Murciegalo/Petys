import { takeLatest, all, call, put } from 'redux-saga/effects';
import { GET_ALL_PETS_STARTS, GET_PET_REVIEWS_STARTS } from './types';
import {
  getAllPetsSuccess,
  getAllPetsFailed,
  getPetReviewsFailed,
  getPetReviewsSuccess,
} from './pet.actions';
const axios = require('axios');

export function* getAllPetsAsync() {
  try {
    const res = yield axios.get('http://localhost:4500/api/v1/pets');
    yield put(getAllPetsSuccess(res.data.data));
  } catch (err) {
    yield put(getAllPetsFailed(err.response.data));
  }
}
export function* onGetData() {
  yield takeLatest(GET_ALL_PETS_STARTS, getAllPetsAsync);
}

export function* petSaga() {
  yield all([call(onGetData)]);
}
