const Pet = require('../Models/PetModel');

exports.getAllPets = async (req, res) => {
  try {
    const data = await Pet.find();

    res.status(200).json({
      status: 'success',
      results: data.length,
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      error: {
        code: err.code,
        key: err.keyValue,
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
      error: {
        code: err.code,
        key: err.keyValue,
      },
    });
  }
};

exports.createPet = async (req, res) => {
  const { name, pedigree, price } = req.body;
  try {
    const newPet = await Pet.create({
      name,
      pedigree,
      price,
    });

    res.status(200).json({
      status: 'success',
      pet: newPet,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      error: {
        code: err.code,
        key: err.keyValue,
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
      error: {
        code: err.code,
        key: err.keyValue,
      },
    });
  }
};

exports.deletePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'delete completed',
      pet,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      error: {
        code: err.code,
        key: err.keyValue,
      },
    });
  }
};
