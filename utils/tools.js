const { default: mongoose } = require('mongoose');

exports.db = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log('DB connected');
  } catch (err) {
    console.log(err);
  }
};

exports.filterObj = (obj, ...str) => {
  const formatBody = {};
  Object.keys(obj).forEach((el) => {
    if (str.includes(el)) {
      formatBody[el] = obj[el];
    }
  });
  return formatBody;
};
