exports.fullFilter = (query) => {
  // BUILD QUERY
  const queryObj = { ...query };
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach((el) => delete queryObj[el]);

  // ADVANCED FILTERING
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  return queryStr;
};

exports.sorting = (query) => {
  if (query) {
    const sortBy = req.query.sort.split(',').join(' ');
    let querySort = query.sort(sortBy);
    return querySort;
  } else {
    let querySort = query.sort('price');
    return querySort;
  }
};
