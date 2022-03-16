const express = require('express');
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
} = require('../Controllers/user');
const {
  signup,
  signin,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
  updatePassword,
} = require('../Controllers/auth');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.patch('/updateMyPassword', protect, updatePassword);
router.patch('/updateMe', protect, updateMe);
router.delete('/deleteMe', protect, deleteMe);

router.get('/', protect, restrictTo('admin'), getAllUsers);
router.post('/', createUser);

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', protect, restrictTo('admin'), deleteUser);

module.exports = router;
