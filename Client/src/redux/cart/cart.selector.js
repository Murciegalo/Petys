import { createSelector } from 'reselect';

// Input Selector
const selectCartReducer = (state) => state.cart;

export const grabCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);

export const grabIsCartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpen);

// export const selectCartCount = createSelector(
//   [grabCartItems],
//   (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity),
//   0,
// );

// export const selectCartTotal = createSelector(
//   [grabCartItems],
//   (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price),
//   0,
// );
