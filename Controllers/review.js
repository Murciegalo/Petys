const { catchError, humanErrors } = require('./errorHandler');
const Review = require('../Models/ReviewModel');
const { filterObj } = require('../utils/tools');

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({
      status: 'success',
      results: reviews.length,
      reviews,
    });
  } catch (err) {
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      humanErrors(res, 404, 'fail', 'Sorry, we cannot find a review');
    }
    // Clean req
    const reqBody = filterObj(req.body, 'review', 'rating');
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      reqBody,
      {
        new: true,
        runValidators: true, //Mongo own validations (proper emails format, name...)
      }
    );
    res.status(200).json({
      status: 'success',
      updatedReview,
    });
  } catch (err) {
    catchError(err, res);
  }
};

exports.getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (review === null) {
      humanErrors(res, 404, 'fail', 'Sorry, review not found');
    }
    res.status(200).json({
      status: 'success',
      review,
    });
  } catch (err) {
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
  }
};

exports.createReview = async (req, res) => {
  if (!req.body.petReviewed) req.body.petReviewed = req.params.petId;
  if (!req.body.userReview) req.body.userReview = req.user.id;
  try {
    const newReview = await Review.create(req.body);
    res.status(200).json({
      status: 'success',
      newReview,
    });
  } catch (err) {
    catchError(err, res);
  }
};

exports.deleteReview = async (req, res) => {
  try {
    let delet = await User.findByIdAndDelete(req.params.id);
    if (delet === null) {
      humanErrors(res, 404, 'fail', 'Sorry, we cannot find a review');
    }
    res.status(200).json({
      status: 'delete completed',
    });
  } catch (err) {
    catchError(err, res, 'Sorry, we could not find any user');
  }
};
