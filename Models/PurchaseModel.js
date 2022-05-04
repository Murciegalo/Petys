const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  pet: {
    type: mongoose.Schema.ObjectId,
    ref: 'Pet',
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  price: {
    type: Number,
    required: [true, 'Please fill in this field'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  paid: {
    // Retail
    type: Boolean,
    default: true,
  },
});
// Seller checkings
purchaseSchema.pre(/^find/, function (next) {
  this.populate('user').populate({
    path: 'pet',
    select: 'name',
  });
});

const Purchases = mongoose.model('Purchases', purchaseSchema);

module.exports = Purchases;
