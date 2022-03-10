const mongoose = require('mongoose');
const slugify = require('slugify');

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A pet needs a name'],
      trim: true,
    },
    slug: String,
    pedigreeM: {
      type: String,
      required: [true, 'A pet needs a pedigree'],
      unique: true,
    },
    pedigreeF: {
      type: String,
      required: [true, 'A pet needs a pedigree'],
      unique: true,
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
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
petSchema.virtual('totalDiscount').get(function () {
  return this.price * this.priceDiscount;
});

//DOCUMENT MIDDLEWARE: save() create() => pre/post
petSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// QUERY MIDDLEWARE
// petSchema.pre(/^find/, function (next) {
//   next();
// });

// AGGREGATION MIDDLEWARE
// petSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { secretPet: { $ne: true } } });
//   next();
// });
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
