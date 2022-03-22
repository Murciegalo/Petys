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

router.post('/', protect, restrictTo('seller', 'admin'), createPet);
//
router.put('/:id', protect, restrictTo('seller', 'admin'), updatePet);

router.delete('/:id', protect, restrictTo('admin', 'seller'), deletePet);

module.exports = router;
