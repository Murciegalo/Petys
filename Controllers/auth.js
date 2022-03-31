const { promisify } = require('util');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const { catchError } = require('./errorHandler');
const { sendToken } = require('../utils/tools');
const sendEmail = require('../utils/email');

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
    });
    const token = signToken(newUser._id);
    sendToken(token, newUser, 201, res);
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
    sendToken(token, user, 201, res);
  } catch (err) {
    catchError(err, res);
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    //Check user exist
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .json({ msg: 'Sorry, not account registered under this email' });
    }
    // Create token
    const resetToken = user.randomTokenResetPassword();
    await user.save({ validateBeforeSave: false });

    // Email token to user
    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/user/resetPassword/${resetToken}`;
    const msg = `Forgot your password? Please click on the link to create a new password: ${resetUrl}\n
    If you didn't request a new password, please ignore this email.`;
    try {
      await sendEmail({
        email: user.email,
        subject: 'Forgot Password Request',
        message: msg,
      });

      res.status(200).json({
        status: 'success',
        msg: 'Token has been sent to email address',
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });

      catchError(err, res);
      next();
    }
  } catch (err) {
    catchError(err, res);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(404).json({
        msg: `Sorry, it's been a while since u tried to reset your password. Link expired`,
      });
    }
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    const token = signToken(user._id);
    sendToken(token, user, 201, res);
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

exports.updatePassword = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('+password');
    if (!user) {
      return res.status(404).json({
        msg: `Sorry, user does not exist anymore`,
      });
    }

    if (
      !(await user.correctPassword(req.body.currentPassword, user.password))
    ) {
      return res.status(401).json({
        msg: `Sorry, user password is wrong`,
      });
    }
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save(); //User.findbyIdAndUpdate()

    const token = signToken(user._id);
    sendToken(token, user, 200, res);
  } catch (err) {
    catchError(err, res);
  }
};
