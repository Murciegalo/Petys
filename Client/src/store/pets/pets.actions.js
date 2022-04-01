import {
  GET_ALL_PETS_SUCCESS,
  GET_ALL_PETS_FAIL,
  GET_ALL_PETS_STARTS,
  GET_PET_STARTS,
  GET_PET_SUCCESS,
  GET_PET_FAIL,
} from './types';
import axios from 'axios';

export const getAllPets = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PETS_STARTS });
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
  try {
    dispatch({ type: GET_PET_STARTS });
    const res = await axios.get(`http://localhost:4500/api/v1/pets/${id}`);
    dispatch({
      type: GET_PET_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_PET_FAIL,
      payload: error.response,
    });
  }
};
