const express = require('express');
const { protect, restrictTo, isLoggedIn } = require('../Controllers/auth');
const {
  getAllReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
} = require('../Controllers/review');

const router = express.Router({ mergeParams: true });

router.get('/', getAllReviews);

router.use(protect);
router.get('/:id', getReview);
router.post('/', protect, restrictTo('user'), createReview);
router.put('/:id', protect, restrictTo('user', 'admin'), updateReview);
router.delete('/:id', protect, restrictTo('use', 'admin'), deleteReview);

module.exports = router;
