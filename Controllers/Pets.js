const Pet = require('../Models/PetModel');

exports.getAllPets = (req, res) => {
  return res.status(200).json({
    msg: 'all ok',
  });
};

exports.getPet = (req, res) => {
  return res.status(200).json({
    msg: 'all ok',
  });
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
      msg: 'all ok',
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
