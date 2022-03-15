const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Sorry, we need your name'],
    trim: true,
    maxlength: [30, 'Please provide a shorter name'],
    minlength: [3, 'Please provider a longer name'],
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
});
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});
//INSTANT METHOD
userSchema.methods.correctPassword = async function (
  inputPassword,
  userPassword
) {
  return await bcrypt.compare(inputPassword, userPassword);
};

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

const User = mongoose.model('User', userSchema);

module.exports = User;
