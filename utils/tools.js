const { default: mongoose } = require('mongoose');

exports.db = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log('DB connected');
  } catch (err) {
    console.log(err);
  }
};

exports.filterObj = (obj, ...str) => {
  const formatBody = {};
  Object.keys(obj).forEach((el) => {
    if (str.includes(el)) {
      formatBody[el] = obj[el];
    }
  });
  return formatBody;
};

exports.sendToken = (token, user, statusCode, res) => {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIES_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, //prevent cross-site attacks
  };
  if (process.env.NODE_ENV == 'production') {
    cookieOptions.secure = true;
  }
  res.cookie('jwt', token, cookieOptions);
  res.status(statusCode).json({
    status: 'success',
    token,
    user,
  });
};
