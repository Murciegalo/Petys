const { humanErrors, catchError } = require('./errorHandler');

exports.deleteOne = (Model) => async (req, res) => {
  try {
    const review = await Model.findById(req.params.id);
    if (!review) {
      return humanErrors(
        res,
        403,
        'fail',
        'Sorry, deletion was already completed'
      );
    }
    await Model.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    catchError(err, res, 'Sorry, we could not find that item');
  }
};

exports.updateOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      status: 'success',
      doc,
    });
  } catch (err) {
    return catchError(
      err,
      res,
      'Sorry, we could not find that item. Update not completed'
    );
  }
};

exports.createOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.create(req.body);
    res.status(200).json({
      status: 'success',
      doc,
    });
  } catch (err) {
    catchError(err, res);
  }
};

exports.getOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findById(req.params.id);
    if (doc === null) {
      humanErrors(res, 404, 'fail', 'Sorry, doc not found');
    }
    res.status(200).json({
      status: 'success',
      doc,
    });
  } catch (err) {
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
  }
};

exports.getAll = (Model) => async (req, res) => {
  try {
    const doc = await Model.find();
    res.status(200).json({
      status: 'success',
      results: doc.length,
      doc,
    });
  } catch (err) {
    catchError(err, res, 'Sorry, you left our web. Please come back, xDD');
  }
};
