const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const { catchError } = require('./errorHandler');

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.S, {
      expiresIn: process.env.ET,
    });
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
    const user = await User.findOne({
      where: {
        name: req.body.name,
      },
    });
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        message: 'Invalid Password!',
      });
    }
    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    req.session.token = token;
    return res.status(200).json({
      status: 'success',
      user,
    });
  } catch (err) {
    catchError(err, res);
  }
};
