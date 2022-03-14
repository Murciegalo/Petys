const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Models/UserModel');
const { catchError } = require('./errorHandler');

const signToken = (id) =>
  jwt.sign({ id }, process.env.S, {
    expiresIn: process.env.ET,
  });

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    const token = signToken(newUser._id);
    res.status(201).json({
      status: 'success',
      token,
      newUser,
    });
  } catch (err) {
    catchError(err, res);
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please provide email and password' });
    }
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res
        .status(404)
        .send({ msg: 'User Not found or Invalid Password!' });
    }

    const token = signToken(user._id);

    // req.session.token = token;
    return res.status(200).json({
      status: 'success',
      user,
      token,
    });
  } catch (err) {
    catchError(err, res);
  }
};
