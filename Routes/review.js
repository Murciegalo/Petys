const express = require('express');
const { protect, restrictTo } = require('../Controllers/auth');
const {
  getAllReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
} = require('../Controllers/review');

const router = express.Router({ mergeParams: true });

router.use(protect);

router.get('/', getAllReviews);
router.get('/:id', getReview);
router.post('/', protect, restrictTo('user'), createReview);
router.put('/:id', protect, restrictTo('user', 'admin'), updateReview);
router.delete('/:id', protect, restrictTo('use', 'admin'), deleteReview);

module.exports = router;
