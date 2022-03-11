const User = require('../Models/UserModel');

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      newUser,
    });
  } catch (err) {
    catchError(err, res);
  }
};
