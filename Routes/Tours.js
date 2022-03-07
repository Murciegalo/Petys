const express = require('express');
const {
  getAllTours,
  getTour,
  checkID
} = require('../Controllers/Tours');

const router = express.Router();

// MIDDLEWARES
router.param('id', checkID)


// TOURS
router.get( '/', getAllTours );
router.get( '/:id', getTour );



module.exports = router;