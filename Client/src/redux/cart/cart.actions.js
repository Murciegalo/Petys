import { createAction } from '../../utils/reducer.utils';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './types';

export const addItemCart = (payload) => createAction(ADD_ITEM_TO_CART, payload);

export const removeItemCart = (payload) => createAction(REMOVE_ITEM_FROM_CART, payload);
