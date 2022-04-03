import { combineReducers } from 'redux';
import { petsReducer } from './pets/pets.reducer';
import { reviewsReducer } from './reviews/reviews.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  pets: petsReducer,
  reviews: reviewsReducer,
});
