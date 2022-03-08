const express = require('express');
const {
  getAllPets,
  getPet,
  createPet,
  updatePet,
  deletePet,
} = require('../Controllers/Pets');

const router = express.Router();
// MIDDLEWARES
// router.param('id', checkID);

// TOURS
router.get('/', getAllPets);
router.get('/:id', getPet);

router.post('/', createPet);

router.put('/:id', updatePet);

router.delete('/:id', deletePet);
module.exports = router;
