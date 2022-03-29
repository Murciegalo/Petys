import { createSelector } from 'reselect';

// Grab user on Login
const getUser = (state) => state.user;

export const grabUser = createSelector([getUser], (all) => all.user);
