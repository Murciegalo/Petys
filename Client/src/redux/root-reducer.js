import { combineReducers } from 'redux';
import { petReducer } from './pets/pet.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  pet: petReducer,
});
