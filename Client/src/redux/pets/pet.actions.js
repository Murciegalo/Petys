import { createAction } from '../../utils/reducer.utils';
import { GET_ALL_PETS_STARTS, GET_ALL_PETS_FAILED, GET_ALL_PETS_SUCCESS } from './types';

export const getAllPetsStart = () => createAction(GET_ALL_PETS_STARTS);

export const getAllPetsSuccess = (payload) => createAction(GET_ALL_PETS_SUCCESS, payload);

export const getAllPetsFailed = (payload) => createAction(GET_ALL_PETS_FAILED, payload);
