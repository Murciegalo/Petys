const express = require('express');
const { protect, restrictTo } = require('../Controllers/auth');
const {
  getAllReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
} = require('../Controllers/review');

const router = express.Router();

router.get('/', protect, restrictTo('admin'), getAllReviews);
router.get('/:id', getReview);

router.post('/', protect, createReview);
router.put('/:id', protect, updateReview);
router.delete('/:id', protect, deleteReview);

module.exports = router;
