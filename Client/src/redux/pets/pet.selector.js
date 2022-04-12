import { createSelector } from 'reselect';
import { convertCollectionsSnapshotToMap } from '../../utils/dbArrToObj';

// Input Selector
const getPets = (state) => state.pets;

// Memoized Selector
export const grabUser = createSelector([getPets], (data) => {
  console.log('DATA', data);
  const test = convertCollectionsSnapshotToMap(data.pets);
});
