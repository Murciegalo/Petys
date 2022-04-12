// Format Data-ready to work with DB Objs format
export const convertCollectionsSnapshotToMap = (collections) => {
  return collections.reduce((accumulator, collection) => {
    accumulator[collection.slug] = [collection];
    return accumulator;
  }, {});
};
