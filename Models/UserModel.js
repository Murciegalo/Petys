const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Sorry, we need your name'],
    maxlength: [30, 'Please provide a shorter name'],
    minlength: [3, 'Please provider a longer name'],
    trim: true,
    validate: [validator.isAlpha, 'Please input only characters on your name'],
  },
  email: {
    type: String,
    required: [true, 'Sorry, we need your email address'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'seller', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please, do not forget your password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please, confirm your password'],
    validate: {
      // only works ON SAVE or CREATE
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});
//THEY DON'T WORK on findbyIdAndUpdate().. . Use one SAVE or CREATE
// 1
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});
// 2
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

//INSTANT METHODS
// 1
userSchema.methods.correctPassword = async function (
  inputPassword,
  userPassword
) {
  return await bcrypt.compare(inputPassword, userPassword);
};

// 2
userSchema.methods.changedPasswordAfter = function (jwtTimeStamp) {
  if (this.passwordChangedAt) {
    const formatTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return jwtTimeStamp < formatTimeStamp;
  }
  return false;
};

// 3
userSchema.methods.randomTokenResetPassword = function () {
  const token = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  console.log('Token Reset password', token);
  return token;
};
const User = mongoose.model('User', userSchema);

module.exports = User;
