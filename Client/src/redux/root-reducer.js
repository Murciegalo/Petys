import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { petReducer } from './pets/pet.reducer';
import { reviewReducer } from './reviews/review.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  pets: petReducer,
  review: reviewReducer,
  cartItems: cartReducer,
});
