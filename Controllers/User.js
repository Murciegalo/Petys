const { catchError, humanErrors } = require('./errorHandler');
const User = require('../Models/UserModel');
const { filterObj } = require('../utils/tools');
const {
  deleteOne,
  updateOne,
  createOne,
  getOne,
  getAll,
} = require('./handlerFactory');

exports.getMe = async (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = async (req, res) => {
  try {
    if (req.body.password || req.body.passwordConfirm) {
      humanErrors(
        res,
        400,
        'fail',
        'You cannot update your password in this section, please go to the right one'
      );
    }
    const reqBody = filterObj(req.body, 'name', 'email');
    const updatedUser = await User.findByIdAndUpdate(req.user.id, reqBody, {
      new: true,
      runValidators: true, //Mongo own validations (proper emails format, name...)
    });
    res.status(200).json({
      status: 'success',
      user: updatedUser,
      auth: true,
    });
  } catch (err) {
    catchError(err, res);
  }
};

exports.deleteMe = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, { active: false });
    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    catchError(err, res);
  }
};

// ADMIN
exports.getAllUsers = getAll(User);
exports.getUser = getOne(User);
exports.createUser = createOne(User);
exports.updateUser = updateOne(User);
exports.deleteUser = deleteOne(User);
