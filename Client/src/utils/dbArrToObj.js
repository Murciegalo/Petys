// Format Data-ready to work with DB Objs format
export const convertCollectionToObj = (collections) => {
  return collections.reduce((accumulator, collection) => {
    accumulator[collection._id] = collection;
    return accumulator;
  }, {});
};

export const groupBy = (array, key) => {
  return array.reduce((accumulator, collection) => {
    (accumulator[collection[key]] = accumulator[collection[key]] || []).push(collection);
    return accumulator;
  }, {});
};
