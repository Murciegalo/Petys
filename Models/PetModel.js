const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A pet needs a name'],
    trim: true,
  },
  pedigreeM: {
    type: String,
    required: [true, 'A pet needs a pedigree'],
  },
  pedigreeF: {
    type: String,
    required: [true, 'A pet needs a pedigree'],
  },
  description: {
    type: String,
    required: [true, 'A pet needs a description'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'A pet needs a price'],
  },
  priceDiscount: {
    type: Number,
  },
  supplier: {
    type: String,
    required: [true, 'A pet needs a seller'],
  },
  imgCover: {
    type: String,
    trim: true,
    required: [true, 'A pet needs an image cover'],
  },
  imgs: [
    {
      type: String,
    },
  ],

  ratingsAvrgSupplier: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
