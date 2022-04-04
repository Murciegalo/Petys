import { createSelector } from 'reselect';

// Input Selector
const getUser = (state) => state.user;
// Memoized Selector
export const grabUser = createSelector([getUser], (all) => all.user);
