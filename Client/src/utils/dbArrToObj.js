// Format Data-ready to work with DB Objs format
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.map((doc) => {
    const {
      _id,
      pedigreeM,
      pedigreeF,
      description,
      seller,
      imgCover,
      imgs,
      name,
      price,
      ratingsAvrgSeller,
      ratingsQuantity,
      slug,
    } = doc;
    return {
      routeName: encodeURI(name.toLowerCase()).replace(/%20/g, '-'),
      id: _id,
      name,
      pedigreeM,
      pedigreeF,
      description,
      imgCover,
      imgs,
      price,
      ratingsAvrgSeller,
      ratingsQuantity,
      slug,
      seller,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.routeName] = collection;
    return accumulator;
  }, {});
};

//FORMAT Objs to arr to display in UI
export const arrTransformer = (data) => Object.entries(data).map((el) => el[1]);
