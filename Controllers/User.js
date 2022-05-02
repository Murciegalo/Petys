const multer = require('multer');
const { catchError, humanErrors } = require('./errorHandler');
const User = require('../Models/UserModel');
const { filterObj } = require('../utils/tools');
const {
  deleteOne,
  updateOne,
  createOne,
  getOne,
  getAll,
} = require('./handlerFactory');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/assets/users');
  },
  filename: (req, file, cb) => {
    const ext = req.file.mimetype.split('/')[1];
    cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
  },
});
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image, Please upload only images'), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single('photo');

exports.getMe = async (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = async (req, res) => {
  try {
    if (req.body.password || req.body.passwordConfirm) {
      humanErrors(
        res,
        400,
        'fail',
        'You cannot update your password in this section, please go to the right one'
      );
    }
    const reqBody = filterObj(req.body, 'name', 'email');
    const updatedUser = await User.findByIdAndUpdate(req.user.id, reqBody, {
      new: true,
      runValidators: true, //Mongo own validations (proper emails format, name...)
    });
    res.status(200).json({
      status: 'success',
      user: updatedUser,
      auth: true,
    });
  } catch (err) {
    catchError(err, res);
  }
};

exports.deleteMe = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, { active: false });
    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    catchError(err, res);
  }
};

// ADMIN
exports.getAllUsers = getAll(User);
exports.getUser = getOne(User);
exports.createUser = createOne(User);
exports.updateUser = updateOne(User);
exports.deleteUser = deleteOne(User);
