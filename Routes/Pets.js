const express = require('express');
const { restrictTo, protect, isLoggedIn } = require('../Controllers/auth');
const {
  aliasTopPets,
  getAllPets,
  getPet,
  createPet,
  updatePet,
  deletePet,
  getPetStats,
  getPetByLocation,
} = require('../Controllers/pet');
const reviewRouter = require('../Routes/review');

const router = express.Router();

router.use('/:petId/reviews', reviewRouter);

//App
router.get('/', getAllPets);

router.use(protect);
router.get('/:id', getPet);
router.get('/loc/:location', getPetByLocation);
router.post('/', restrictTo('seller', 'admin'), createPet);
router.put('/:id', restrictTo('seller', 'admin'), updatePet);
router.delete('/:id', restrictTo('seller', 'admin'), deletePet);

// STATS
router.use(restrictTo('admin'));
router.get('/top-cheap', aliasTopPets, getAllPets);
router.get('/stats', getPetStats);

module.exports = router;
