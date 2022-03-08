const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Pet = require('../Models/PetModel');

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DB).then((el) => {
  // console.log(el.connections);
  console.log('DB connected');
});

// READ JSON FILE
const pets = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Pet.create(pets);
    console.log('Data successfully loaded');
    process.exit(); //just for very simple commands
  } catch (err) {
    console.log(err);
  }
};

// DELETE ALL DATA FROM DB COLLECTION
const deleteData = async () => {
  try {
    await Pet.deleteMany();
    console.log('Data successfully deleted');
    process.exit(); //just for very simple commands
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
