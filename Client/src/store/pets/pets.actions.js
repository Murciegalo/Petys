import {
  GET_ALL_PETS_SUCCESS,
  GET_ALL_PETS_FAIL,
  GET_ALL_PETS_STARTS,
  GET_A_PET_STARTS,
  GET_A_PET_SUCCESS,
  GET_A_PET_FAIL,
} from './types';
import axios from 'axios';

export const getAllPets = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PETS_STARTS });
  try {
    const res = await axios.get('http://localhost:4500/api/v1/pets');
    dispatch({
      type: GET_ALL_PETS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PETS_FAIL,
      payload: error.response,
    });
  }
};

export const getPet = (id) => async (dispatch) => {
  dispatch({ type: GET_A_PET_STARTS });
  try {
    const res = await axios.get(`http://localhost:4500/api/v1/pets/${id}`);
    dispatch({
      type: GET_A_PET_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_A_PET_FAIL,
      payload: error.response,
    });
  }
};
