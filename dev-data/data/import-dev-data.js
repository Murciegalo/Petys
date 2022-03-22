const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Pet = require('../../Models/PetModel');
const Review = require('../../Models/ReviewModel');
const User = require('../../Models/UserModel');
dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DB).then((el) => {
  console.log('DB connected');
});

// READ JSON FILE
const pets = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Pet.create(pets);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
    console.log('Data successfully loaded');
    process.exit(); //just for very simple commands
  } catch (err) {
    console.log(err);
  }
};

// DELETE ALL DATA FROM DB COLLECTION
const deleteData = async () => {
  try {
    // await Pet.deleteMany();
    // await User.deleteMany();
    // await Review.deleteMany();
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
