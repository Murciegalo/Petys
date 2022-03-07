const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A pet needs a name'],
  },
  pedigree: {
    type: Number,
    required: [true, 'A pet needs a pedigree'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'A pet needs a price'],
  },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
