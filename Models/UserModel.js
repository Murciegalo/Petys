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
  password: {
    type: String,
    required: [true, 'Please, do not forget your password'],
    minlength: 8,
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
});
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
