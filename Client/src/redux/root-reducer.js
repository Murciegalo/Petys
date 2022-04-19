import { combineReducers } from 'redux';
import { petReducer } from './pets/pet.reducer';
import { reviewReducer } from './reviews/review.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  pets: petReducer,
  review: reviewReducer,
});
