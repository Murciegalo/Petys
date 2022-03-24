const mongoose = require('mongoose');
const Pet = require('../Models/PetModel');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Please fill in this field'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Please fill in this field'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    petReviewed: {
      type: mongoose.Schema.ObjectId,
      ref: 'Pet',
      required: true,
    },
    userReview: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
//DOCUMENT QUERY
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'userReview',
    select: 'name foto',
  });
  next();
});
//STATIC Method => Model
reviewSchema.statics.calcAvgRatings = async function (petId) {
  const stats = await this.aggregate([
    {
      $match: { petReviewed: petId },
    },
    {
      $group: {
        _id: '$petReviewed',
        numRatings: { $sum: 1 },
        avgRatings: { $avg: '$rating' },
      },
    },
  ]);
  console.log('STATS', stats);
  await Pet.findByIdAndUpdate(petId, {
    ratingsAvrgSeller: stats[0].numRatings,
    ratingsQuantity: stats[0].avgRatings,
  });
};
// Doc. Middleware
reviewSchema.post('save', function () {
  this.constructor.calcAvgRatings(this.petReviewed);
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
