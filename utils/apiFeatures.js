const Pet = require('../Models/PetModel');
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

exports.sorting = (reqQuery, query) => {
  let querySort;
  if (reqQuery) {
    const sortBy = reqQuery.split(',').join(' ');
    querySort = query.sort(sortBy);
    return querySort;
  } else {
    querySort = query.sort('-price');
    return querySort;
  }
};

exports.fieldsLimiting = (reqQuery, query) => {
  let queryLimit;
  if (reqQuery) {
    const fields = req.query.fields.split(',').join(' ');
    queryLimit = query.select(`${fields} -__v`);
    return queryLimit;
  } else {
    queryLimit = query.select('-__v');
    return queryLimit;
  }
};

exports.pagination = async (reqQueryPg, reqQueryL, query) => {
  let queryLimit;
  const page = reqQueryPg * 1 || 1;
  const limitt = reqQueryL * 1 || 100;
  const skipp = (page - 1) * limitt;
  if (reqQueryPg) {
    const numPets = await Pet.countDocuments();
    if (skipp >= numPets) throw new Error('This pg does not exist');
  }
  queryLimit = query.skip(skipp).limit(limitt);
  return queryLimit;
};
