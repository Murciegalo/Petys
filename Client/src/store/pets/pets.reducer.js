import {
  GET_ALL_PETS_STARTS,
  GET_ALL_PETS_SUCCESS,
  GET_ALL_PETS_FAIL,
  // GET_PET_STARTS,
  // GET_PET_SUCCESS,
  // GET_PET_FAIL,
} from './types';

const INITIAL_STATE = {
  pets: null,
  pet: null,
  loading: false,
  error: null,
};

export const petsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PETS_STARTS:
      // case GET_PET_STARTS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PETS_SUCCESS:
      return {
        ...state,
        pets: payload,
        loading: false,
        pet: null,
        error: null,
      };
    // case GET_PET_SUCCESS:
    //   return {
    //     ...state,
    //     pet: payload.pet,
    //     loading: false,
    //   };
    case GET_ALL_PETS_FAIL:
      // case GET_PET_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        pets: null,
        pet: null,
      };
    default:
      return state;
  }
};
