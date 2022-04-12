// Format Data-ready to work with DB Objs format
export const convertCollectionsSnapshotToMap = (collections) => {
  return collections.reduce((accumulator, collection) => {
    accumulator[collection.slug] = [collection];
    return accumulator;
  }, {});
};

//FORMAT Objs to arr to display in UI
export const arrTransformer = (data) => Object.entries(data).map((el) => el[1]);
