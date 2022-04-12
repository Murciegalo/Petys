import { createAction } from '../../utils/reducer.utils';
import {
  GET_ALL_PETS_STARTS,
  GET_ALL_PETS_FAILED,
  GET_ALL_PETS_SUCCESS,
  GET_PET_REVIEWS_FAILED,
  GET_PET_REVIEWS_STARTS,
  GET_PET_REVIEWS_SUCCESS,
} from './types';

export const getAllPetsStart = () => createAction(GET_ALL_PETS_STARTS);

export const getAllPetsSuccess = (payload) => createAction(GET_ALL_PETS_SUCCESS, payload);

export const getAllPetsFailed = (payload) => createAction(GET_ALL_PETS_FAILED, payload);

export const getPetReviewsStarts = () => createAction(GET_PET_REVIEWS_STARTS);

export const getPetReviewsSuccess = (payload) => createAction(GET_PET_REVIEWS_SUCCESS, payload);

export const getPetReviewsFailed = (payload) => createAction(GET_PET_REVIEWS_FAILED, payload);
