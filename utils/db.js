const { default: mongoose } = require('mongoose');

exports.db = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log('DB connected');
  } catch (err) {
    console.log(err);
  }
};
