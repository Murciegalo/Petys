const express = require('express');
const {
  getAllTours,
  getTour
} = require('../Controllers/Tours');


const router = express.Router();


// TOURS
router.get( '/', getAllTours );
router.get( '/:id', getTour );

module.exports = router;