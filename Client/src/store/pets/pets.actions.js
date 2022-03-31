import { GET_ALL_PETS_SUCCESS, GET_ALL_PETS_FAIL, GET_ALL_PETS_STARTS } from './types';
import axios from 'axios';

// REGISTER AN USER
export const getAllPets = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PETS_STARTS });
    const res = await axios.get('http://localhost:4500/api/v1/pets');
    dispatch({
      type: GET_ALL_PETS_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PETS_FAIL,
      payload: error.response,
    });
  }
};
