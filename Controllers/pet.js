const sharp = require('sharp');
const Pet = require('../Models/PetModel');
const {
  fullFilter,
  sorting,
  fieldsLimiting,
  pagination,
} = require('../utils/apiFeatures');
const { upload } = require('../utils/photos');
const { catchError, humanErrors } = require('./errorHandler');
const { deleteOne, updateOne, createOne } = require('./handlerFactory');

// MIDDLEWARES
exports.aliasTopPets = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'price';
  next();
};

exports.uploadPetImgs = upload.fields([
  { name: 'imgCover', maxCount: 1 },
  { name: 'imgs', maxCount: 4 },
]);

exports.resizePetImgs = async (req, res, next) => {
  if (req.files.imgCover) {
    try {
      req.body.imgCover = `pet-${req.params.id}-${Date.now()}-cover.jpeg`;
      await sharp(req.files.imgCover[0].buffer, { failOnError: false }) //failOnError to be check
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`Client/src/assets/pets/${req.body.imgCover}`);
    } catch (err) {
      catchError(err, res);
      next();
    }
  }
  if (req.files.imgs) {
    try {
      req.body.imgs = [];
      await Promise.all(
        req.files.imgs.map(async (el, I) => {
          const fileName = `pet-${req.params.id}-${Date.now()}-${I + 1}.jpeg`;
          await sharp(el.buffer, { failOnError: false }) //failOnError to be check
            .resize(2000, 1333)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`Client/src/assets/pets/${fileName}`);
          req.body.imgs.push(fileName);
        })
      );
    } catch (err) {
      catchError(err, res);
      next();
    }
  }
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
