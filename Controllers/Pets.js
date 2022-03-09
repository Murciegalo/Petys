const Pet = require('../Models/PetModel');
const { fullFilter, sorting } = require('../utils');

exports.getAllPets = async (req, res) => {
  try {
    // FILTER
    let queryFilter = fullFilter(req.query);
    let query = Pet.find(JSON.parse(queryFilter));

    //SORTING
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-price');
    }
    // FIELD LIMITING
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(`${fields} -__v`);
    } else {
      query = query.select('-__v');
    }
    // PAGINATION
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;

    query.skip(skip).limit(limit);

    if (req.query.page) {
      const numPets = await Pet.countDocuments();
      if (skip >= numPets) throw new Error('This pg does not exist');
    }
    // EXECUTE QUERY
    const data = await query;
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
