const Pet = require('../Models/PetModel');

exports.getAllPets = async (req, res) => {
  try {
    // BUILD QUERY
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // ADVANCED FILTERING
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    // console.log(JSON.parse(queryStr));

    // EXECUTE QUERY
    const data = await Pet.find(JSON.parse(queryStr));

    res.status(200).json({
      status: 'success',
      results: data.length,
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      code: err.code,
      key: err.keyValue,
      name: err.name,
      msg: err.message,
      error: {
        err,
      },
    });
  }
};

exports.getPet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      pet,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      code: err.code,
      key: err.keyValue,
      name: err.name,
      msg: err.message,
      error: {
        err,
      },
    });
  }
};

exports.createPet = async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.status(200).json({
      status: 'success',
      pet: newPet,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      code: err.code,
      key: err.keyValue,
      name: err.name,
      msg: err.message,
      error: {
        err,
      },
    });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: 'success',
      pet,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      code: err.code,
      key: err.keyValue,
      name: err.name,
      msg: err.message,
      error: {
        err,
      },
    });
  }
};

exports.deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'delete completed',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      code: err.code,
      key: err.keyValue,
      name: err.name,
      msg: err.message,
      error: {
        err,
      },
    });
  }
};
