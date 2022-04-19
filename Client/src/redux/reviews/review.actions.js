import { createAction } from '../../utils/reducer.utils';
import {
  GET_ALL_PET_REVIEWS_FAILED,
  GET_ALL_PET_REVIEWS_STARTS,
  GET_ALL_PET_REVIEWS_SUCCESS,
} from './types';

export const getPetReviewsStarts = (petId) => createAction(GET_ALL_PET_REVIEWS_STARTS, petId);

export const getPetReviewsSuccess = (payload) => createAction(GET_ALL_PET_REVIEWS_SUCCESS, payload);

export const getPetReviewsFailed = (payload) => createAction(GET_ALL_PET_REVIEWS_FAILED, payload);
