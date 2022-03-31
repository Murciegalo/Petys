import { combineReducers } from 'redux';
import { petsReducer } from './pets/pets.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  pets: petsReducer,
});
