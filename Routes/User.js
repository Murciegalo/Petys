const express = require('express');
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  getMe,
} = require('../Controllers/user');
const {
  signup,
  signin,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
  updatePassword,
  logout,
  isLoggedIn,
} = require('../Controllers/auth');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.use(protect);

router.get('/me', getMe, getUser);
router.patch('/updateMe', updateMe);
router.delete('/deleteMe', deleteMe);
router.patch('/updateMyPassword', updatePassword);

router.use(restrictTo('admin'));

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
