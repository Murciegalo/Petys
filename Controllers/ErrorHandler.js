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
  }
  return res.status(404).json({
    status: 'fail',
    code: err.code,
    key: err.keyValue,
    name: err.name,
    msg: err.message,
    error: {
      err,
    },
  });
};
