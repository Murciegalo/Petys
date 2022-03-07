const express = require('express');
const {
  getAllPets,
  getPet,
  checkID,
  createPet,
} = require('../Controllers/Pets');

const router = express.Router();

// MIDDLEWARES
// router.param('id', checkID);

// TOURS
router.get('/', getAllPets);
router.get('/:id', getPet);

router.post('/', createPet);
module.exports = router;
