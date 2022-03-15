const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const { catchError } = require('./errorHandler');

const signToken = (id) =>
  jwt.sign({ id }, process.env.S, {
    expiresIn: process.env.ET,
  });

exports.signup = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(401)
        .json({ msg: 'Sorry, name or email already in use' });
    }
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

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return res
        .status(401)
        .json({ msg: 'Please sign into your account, thanks' });
    }
    const decoded = await promisify(jwt.verify)(token, process.env.S);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ msg: "Sorry, user don't exist anymore" });
    }
    if (user.changedPasswordAfter(decoded.iat)) {
      return res
        .status(401)
        .json({ msg: 'Password recently changed, please sign in again' });
    }
    req.user = user;
    next();
  } catch (err) {
    catchError(err, res);
  }
};

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    try {
      if (!roles.includes(req.user.role)) {
        return res
          .status(403)
          .json({ msg: 'Sorry, you need permission to continue..' });
      }
      next();
    } catch (err) {
      catchError(err, res);
      next();
    }
  };
