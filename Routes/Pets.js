const express = require('express');
const { getAllPets, getPet, createPet } = require('../Controllers/Pets');

const router = express.Router();

// MIDDLEWARES
// router.param('id', checkID);

router.post('/', createPet);
// TOURS
router.get('/', getAllPets);
router.get('/:id', getPet);

module.exports = router;
