import { createSelector } from 'reselect';

// Input Selector
const getUser = (state) => state.user;
// Memoized Selector
export const grabUser = createSelector([getUser], (data) => data.user);

export const grabAuth = createSelector([getUser], (el) => el.isAuth);

export const grabLoading = createSelector([getUser], (el) => el.loading);
