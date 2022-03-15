const express = require('express');
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../Controllers/user');
const {
  signup,
  signin,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
} = require('../Controllers/auth');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword', resetPassword);

router.get('/', protect, restrictTo('admin'), getAllUsers);
router.post('/', createUser);

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', protect, restrictTo('admin'), deleteUser);

module.exports = router;
