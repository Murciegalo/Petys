import { createSelector } from 'reselect';

// Input Selector
const selectCartReducer = (state) => state.cart;

export const grabCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);

export const grabIsCartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpen);

export const grabIsShipFormOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isShipFormOpen,
);

export const selectCartCount = createSelector([grabCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => (acc = acc + cartItem.quantity), 0),
);

export const selectCartTotal = createSelector([grabCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => (acc = acc + cartItem.quantity * cartItem.price), 0),
);
