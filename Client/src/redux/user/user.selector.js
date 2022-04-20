import { createSelector } from 'reselect';

// Input Selector
const getUser = (state) => state.user;
// Memoized Selector
export const grabUser = createSelector([getUser], (data) => data.user);

export const grabAuth = createSelector([getUser], (el) => el.isAuth);

export const grabRole = createSelector([getUser], (el) => el.role);

export const grabToken = createSelector([getUser], (el) => el.token);

export const grabLoading = createSelector([getUser], (el) => el.loading);

export const grabError = createSelector([getUser], (el) => el.error);

export const grabAlert = createSelector([getUser], (el) => el.alert);
