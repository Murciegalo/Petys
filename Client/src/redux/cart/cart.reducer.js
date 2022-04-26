import { REMOVE_ITEM_FROM_CART, SET_CART_ITEMS, SET_IS_CART_OPEN } from './types';

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
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el.itemId !== payload),
      };
    default:
      return state;
  }
};
