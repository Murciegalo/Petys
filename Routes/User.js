const express = require('express');
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../Controllers/user');
const { signup, signin } = require('../Controllers/auth');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

router.get('/', getAllUsers);
router.post('/', createUser);

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
