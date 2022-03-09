const Pet = require('../Models/PetModel');
const {
  fullFilter,
  sorting,
  fieldsLimiting,
  pagination,
} = require('../utils/apiFeatures');

// MIDDLEWARE
exports.aliasTopPets = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'price';
  next();
};

exports.getAllPets = async (req, res) => {
  try {
    // FILTER
    let queryFilter = fullFilter(req.query);
    let query = Pet.find(JSON.parse(queryFilter));

    //SORTING
    let querySort = sorting(req.query.sort, query);

    //FIELD LIMITING
    let queryLimit = fieldsLimiting(req.query.fields, querySort);

    // PAGINATION
    let queryPg = pagination(req.query.page, req.query.limit, queryLimit);

    // EXECUTE QUERY
    const data = await queryPg;
    res.status(200).json({
      status: 'success',
      results: data.length,
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      code: err.code,
      key: err.keyValue,
      name: err.name,
      msg: err.message,
      error: {
        err,
      },
    });
  }
};

exports.getPet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      pet,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      code: err.code,
      key: err.keyValue,
      name: err.name,
      msg: err.message,
      error: {
        err,
      },
    });
  }
};

exports.createPet = async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.status(200).json({
      status: 'success',
      pet: newPet,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      code: err.code,
      key: err.keyValue,
      name: err.name,
      msg: err.message,
      error: {
        err,
      },
    });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: 'success',
      pet,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      code: err.code,
      key: err.keyValue,
      name: err.name,
      msg: err.message,
      error: {
        err,
      },
    });
  }
};

exports.deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'delete completed',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      code: err.code,
      key: err.keyValue,
      name: err.name,
      msg: err.message,
      error: {
        err,
      },
    });
  }
};

exports.getPetStats = async (req, res) => {
  try {
    const stats = await Pet.aggregate([
      {
        $match: { ratingsAvrgSupplier: { $gte: 4 } },
      },
      {
        $group: {
          _id: null, //Classify them by categories out of Model for Pet supplier, ...
          numPets: { $sum: 1 },
          numRatings: { $sum: '$ratingsQuantity' },
          avgRating: { $avg: '$ratingsAvrgSupplier' },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
      // {
      //   $sort: { avgRating: 1 },
      // },
      // {
      //   $match: { _id: { $ne: 'Criadero Fernandez' } },
      // },
    ]);
    res.status(200).json({
      status: 'success',
      stats,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      code: err.code,
      key: err.keyValue,
      name: err.name,
      msg: err.message,
      error: {
        err,
      },
    });
  }
};
