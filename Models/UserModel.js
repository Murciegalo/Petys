const mongoose = require('mongoose');
// const slugify = require('slugify');
const validator = require('validator');

const userSchema = new mongoose.Schema({});

const User = mongoose.model('User', userSchema);

module.exports = User;
