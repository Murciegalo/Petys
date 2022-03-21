const express = require('express');
const { restrictTo, protect } = require('../Controllers/auth');
const {
  aliasTopPets,
  getAllPets,
  getPet,
  createPet,
  updatePet,
  deletePet,
  getPetStats,
} = require('../Controllers/pet');
const reviewRouter = require('../Routes/review');

const router = express.Router();

router.use('/:petId/reviews', reviewRouter);

// STATS
router.get('/top-cheap', aliasTopPets, getAllPets);
router.get('/stats', protect, restrictTo('admin'), getPetStats);
// router.get('/monthly-stats/:year', getMonthlyStats);

// TOURS
router.get('/', protect, getAllPets);
router.get('/:id', getPet);
// restrictTo('seller'),
router.post('/', protect, createPet);

router.put('/:id', protect, restrictTo('seller'), updatePet);

router.delete('/:id', protect, restrictTo('admin', 'seller'), deletePet);

module.exports = router;
