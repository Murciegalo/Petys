import { all, call } from 'redux-saga/effects';
import { userSaga } from './user/user.sagas';
export function* rootSaga() {
  yield all([call(userSaga)]);
}
