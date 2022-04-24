import { createSelector } from 'reselect';

// Input Selector
const getCartState = (state) => state.cartItems;

export const getCartItems = createSelector([getCartState], (el) => el.cart);

export const grabIsLoading = createSelector([getCartState], (el) => el.loading);
