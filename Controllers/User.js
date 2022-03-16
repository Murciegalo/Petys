const { catchError, humanErrors } = require('./errorHandler');
const User = require('../Models/UserModel');
const { filterObj } = require('../utils/tools');

exports.getAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({
      status: 'success',
      results: data.length,
      data,
    });
  } catch (err) {
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
  }
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
    });
  } catch (err) {
    catchError(err, res);
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await Pet.findById(req.params.id);
    if (user === null) {
      throw Error('Sorry, user not found with that ID');
    }
    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (err) {
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      newUser,
    });
  } catch (err) {
    catchError(err, res);
  }
};

// ADMIN
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (err) {
    catchError(
      err,
      res,
      'Sorry, we could not find an user. Update not completed'
    );
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let delet = await User.findByIdAndDelete(req.params.id);
    if (delet === null) {
      throw Error('Sorry, user not found with that ID');
    }
    res.status(200).json({
      status: 'delete completed',
    });
  } catch (err) {
    catchError(err, res, 'Sorry, we could not find any user');
  }
};
