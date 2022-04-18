import { all, call } from 'redux-saga/effects';
import { petSaga } from './pets/pet.sagas';
import { reviewsSaga } from './reviews/review.sagas';
import { userSaga } from './user/user.sagas';
export function* rootSaga() {
  yield all([call(userSaga), call(petSaga)], call(reviewsSaga));
}
