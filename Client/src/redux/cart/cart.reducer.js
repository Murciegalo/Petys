import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './types';

const INITIAL_STATE = {
  cart: [],
  loading: false,
  error: null,
  alert: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: [...state.cart].filter((el) => el.itemId === payload.itemId),
      };
    default:
      return state;
  }
};
