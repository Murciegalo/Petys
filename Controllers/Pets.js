const Pet = require('../Models/PetModel');

exports.getAllPets = (req, res, next) => {
  return res.status(200).json({
    msg: 'all ok',
  });
};

exports.getPet = (req, res, next) => {
  return res.status(200).json({
    msg: 'all ok',
  });
};

exports.createPet = async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);

    return res.status(200).json({
      msg: 'all ok',
      pet: newPet,
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      msg: err.msg,
    });
  }
};

exports.updatePet = (req, res) => {
  return res.status(200).json({
    msg: 'all ok',
  });
};

exports.deletePet = (req, res) => {
  return res.status(200).json({
    msg: 'all ok',
  });
};
