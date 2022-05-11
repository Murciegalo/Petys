import { takeLatest, all, call, put } from 'redux-saga/effects';
import { GET_ALL_PETS_STARTS } from './types';
import { getAllPetsSuccess, getAllPetsFailed } from './pet.actions';
import { convertCollectionToObj } from '../../utils/dbArrToObj';
import axios from '../../api/axios';

export function* getAllPetsAsync() {
  try {
    const controller = new AbortController();
    const res = yield axios.get('/pets', { signal: controller.signal });
    const data = convertCollectionToObj(res.data.data);
    yield put(getAllPetsSuccess(data));
  } catch (err) {
    yield put(getAllPetsFailed(err));
  }
}
export function* onGetData() {
  yield takeLatest(GET_ALL_PETS_STARTS, getAllPetsAsync);
}

export function* petSaga() {
  yield all([call(onGetData)]);
}
