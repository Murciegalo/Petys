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
  getMonthlyStats,
} = require('../Controllers/pet');

const router = express.Router();
// MIDDLEWARES
// router.param('id', checkID);

// TOP CHEAP
router.get('/top-cheap', aliasTopPets, getAllPets);

// STATS
router.get('/stats', getPetStats);

// router.get('/monthly-stats/:year', getMonthlyStats);

// TOURS
router.get('/', getAllPets);
router.get('/:id', getPet);

router.post('/', createPet);

router.put('/:id', updatePet);

router.delete('/:id', protect, restrictTo('admin', 'seller'), deletePet);
module.exports = router;
// restrictTo('admin', 'seller'),
