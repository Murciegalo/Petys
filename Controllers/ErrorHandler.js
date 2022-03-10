exports.catchError = (err, res, msg) => {
  if (err.name === 'CastError') {
    return res.status(404).json({
      status: 'fail',
      msg: msg,
    });
  }
  console.log(err.status);
  return res.status(400).json({
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
