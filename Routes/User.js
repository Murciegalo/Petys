const express = require('express');
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../Controllers/user');

const router = express.Router();

// TOURS
router.get('/', getAllUsers);
router.get('/:id', getUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);
module.exports = router;
