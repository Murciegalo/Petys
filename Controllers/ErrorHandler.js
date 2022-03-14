exports.catchError = (err, res, msg) => {
  if (process.env.NODE_ENV === 'development') {
    if (err.name === 'CastError') {
      return res.status(404).json({
        status: 'fail',
        msg: msg,
      });
    }
    if (err.code == '11000') {
      const msg = err.message.match(/(["'])(\\?.)*?\1/);
      return res.status(400).json({
        status: 'fail',
        msg: `Sorry, duplicate field value: ${msg[0]}, please modify it.`,
      });
    }
    if (err.name === 'ValidationError') {
      let value = Object.values(err.errors).map((el) => el.message);
      return res.status(404).json({
        status: 'fail',
        msg: `Invalid input data. ${value.join('/ ')}`,
      });
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({
        status: 'fail',
        msg: 'Invalid token, please sign in again.',
      });
    }
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        status: 'fail',
        msg: 'Session ended, please sign in again',
      });
    }
  }
  return res.status(401).json({
    status: 'fail',
    code: err.code,
    key: err.keyValue,
    name: err.name,
    msg: err.message,
    validationErrors: err.errors,
    error: {
      err,
    },
  });
};
