const User = require('../Models/UserModel');

exports.getAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({
      status: 'success',
      results: data.length,
      data,
    });
  } catch (err) {
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await Pet.findById(req.params.id);
    if (user === null) {
      throw Error('Sorry, user not found with that ID');
    }
    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (err) {
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      newUser,
    });
  } catch (err) {
    catchError(err, res);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (err) {
    catchError(
      err,
      res,
      'Sorry, we could not find an user. Update not completed'
    );
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let delet = await User.findByIdAndDelete(req.params.id);
    if (delet === null) {
      throw Error('Sorry, user not found with that ID');
    }
    res.status(200).json({
      status: 'delete completed',
    });
  } catch (err) {
    catchError(err, res, 'Sorry, we could not find any user');
  }
};
