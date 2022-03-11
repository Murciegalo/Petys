const Pet = require('../Models/PetModel');
const {
  fullFilter,
  sorting,
  fieldsLimiting,
  pagination,
} = require('../utils/apiFeatures');
const { catchError } = require('./errorHandler');

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
    const pet = await Pet.findById(req.params.id);
    if (pet === null) {
      throw Error('Sorry, item not found with that ID');
    }
    res.status(200).json({
      status: 'success',
      pet,
    });
  } catch (err) {
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
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
    // console.log('CREATE PET', err);
    catchError(err, res);
  }
};

exports.updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      pet,
    });
  } catch (err) {
    catchError(
      err,
      res,
      'Sorry, we could not find that item. Update not completed'
    );
  }
};

exports.deletePet = async (req, res) => {
  try {
    let delet = await Pet.findByIdAndDelete(req.params.id);
    if (delet === null) {
      throw Error('Sorry, item not found with that ID');
    }
    res.status(200).json({
      status: 'delete completed',
    });
  } catch (err) {
    catchError(err, res, 'Sorry, we could not find that item');
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

// exports.getMonthlyStats = async (req, res) => {
//   try {
//     const year = req.params.year * 1;

//     const monthlyStats = await Pet.aggregate([]);
//     res.status(200).json({
//       status: 'success',
//       monthlyStats,
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       code: err.code,
//       key: err.keyValue,
//       name: err.name,
//       msg: err.message,
//       error: {
//         err,
//       },
//     });
//   }
// };
