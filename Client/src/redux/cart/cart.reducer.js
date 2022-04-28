import {
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEMS,
  SET_IS_CART_OPEN,
  SET_IS_SHIPPING_FORM_OPEN,
} from './types';

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  isShipFormOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case SET_IS_SHIPPING_FORM_OPEN:
      return {
        ...state,
        isShipFormOpen: payload,
      };
    case SET_CART_ITEMS:
      console.log('REDUCER', payload);
      return {
        ...state,
        cartItems:
          [...state.cartItems].length > 0
            ? [...state.cartItems].filter((el) => el.itemId === payload.itemId)
            : [...state.cartItems, payload],
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
