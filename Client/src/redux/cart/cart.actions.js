import { createAction } from '../../utils/reducer.utils';
import {
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEMS,
  SET_IS_CART_OPEN,
  SET_IS_SHIPPING_FORM_OPEN,
} from './types';

export const setIsCartOpen = (boolean) => createAction(SET_IS_CART_OPEN, boolean);

export const setIsShippingFormOpen = (boolean) => createAction(SET_IS_SHIPPING_FORM_OPEN, boolean);

export const addItemCart = (payload) => createAction(SET_CART_ITEMS, payload);

export const removeItemCart = (payload) => createAction(REMOVE_ITEM_FROM_CART, payload);
