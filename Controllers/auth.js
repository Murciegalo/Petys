const { promisify } = require('util');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const { catchError } = require('./errorHandler');
const { sendToken } = require('../utils/tools');
const Email = require('../utils/email');
const { humanErrors } = require('./errorHandler');
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

    const url = `${req.protocol}://${req.get('host')}/me`;
    await new Email(newUser, url).sendWelcome();

    sendToken(token, newUser, 201, res);
  } catch (err) {
    catchError(err, res);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please provide email and password' });
    }
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
      return humanErrors(
        res,
        404,
        'Failed',
        'Not Found',
        'Sorry, invalid email or password'
      );
    }
    const token = signToken(user._id);
    // req.session.user = user;
    sendToken(token, user, 201, res);
  } catch (err) {
    catchError(err, res);
  }
};

// res.status(200).clearCookies('name')
exports.logout = (req, res) => {
  res.cookie('jwt', 'log user out', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: 'success' });
};

//CHECK USER SESSION ACTIVE OR NOT
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      let decoded;
      // Verify Token
      if (await promisify(jwt.verify)(req.cookies.jwt, process.env.S)) {
        decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.S);
      } else {
        res.cookie('jwt', 'log user out', {
          expires: new Date(Date.now() + 10 * 1000),
          httpOnly: true,
        });
      }

      // User exists?
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return humanErrors(
          res,
          404,
          'Failed',
          'User Not Found',
          'Sorry, user does not exists'
        );
      }
      // User exists so I check if password was changed after issue jwt
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return humanErrors(
          res,
          404,
          'Failed',
          'Not Found',
          'Your password was changed, please login again'
        );
      }
      res.locals.user = currentUser;
      return res
        .status(202)
        .json({ auth: true, user: currentUser, token: req.cookies.jwt });
    } catch (err) {
      return catchError(err, res);
    }
  }
  return res
    .status(401)
    .json({ auth: false, msg: 'User Not Authenticated, No Active Session' });
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

    // const msg = `Forgot your password? Please click on the link to create a new password: ${resetUrl}\n
    // If you didn't request a new password, please ignore this email.`;

    try {
      await new Email(user, resetUrl).sendPasswordReset();
      // await sendEmail({
      //   email: user.email,
      //   subject: 'Forgot Password Request',
      //   message: msg,
      // });

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
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }
    if (!token) {
      return humanErrors(
        res,
        401,
        'fail',
        'Unauthorized',
        'Please sign into your account, thanks'
      );
    }
    const decoded = await promisify(jwt.verify)(token, process.env.S);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ msg: "Sorry, user don't exist anymore" });
    }
    if (user.changedPasswordAfter(decoded.iat)) {
      return humanErrors(
        res,
        401,
        'fail',
        'Unauthorized',
        'Password recently changed, please sign in again'
      );
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
