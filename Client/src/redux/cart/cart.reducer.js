import { SET_CART_ITEMS, SET_IS_CART_OPEN } from './types';

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    default:
      return state;
  }
};
