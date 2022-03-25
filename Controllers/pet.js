const Pet = require('../Models/PetModel');
const {
  fullFilter,
  sorting,
  fieldsLimiting,
  pagination,
} = require('../utils/apiFeatures');
const { catchError, humanErrors } = require('./errorHandler');
const { deleteOne, updateOne, createOne } = require('./handlerFactory');

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
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
  }
};

exports.getPet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id).populate('reviews');
    if (pet === null) {
      humanErrors(res, 404, 'fail', 'Sorry, item not found with that ID');
    }
    res.status(200).json({
      status: 'success',
      pet,
    });
  } catch (err) {
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
  }
};

exports.getPetByLocation = async (req, res) => {
  try {
    const pet = await Pet.find({ location: req.params.location }).populate(
      'reviews'
    );
    if (pet == null || pet.length == 0) {
      return humanErrors(
        res,
        404,
        'fail',
        'Sorry, pet not available in current location'
      );
    }
    res.status(200).json({
      status: 'success',
      results: pet.length,
      pet,
    });
  } catch (err) {
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
  }
};

exports.createPet = createOne(Pet);

exports.updatePet = updateOne(Pet);

exports.deletePet = deleteOne(Pet);

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
    ]);
    res.status(200).json({
      status: 'success',
      stats,
    });
  } catch (err) {
    catchError(
      err,
      res,
      'There is type error in your aggregation, please check'
    );
  }
};
