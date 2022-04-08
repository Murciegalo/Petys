import mongoose from 'mongoose';

export async function db() {
  try {
    await mongoose.connect(process.env.DB);
    console.log('DB connected');
  } catch (err) {
    console.log(err);
  }
}

export function filterObj(obj, ...str) {
  const formatBody = {};
  Object.keys(obj).forEach((el) => {
    if (str.includes(el)) {
      formatBody[el] = obj[el];
    }
  });
  return formatBody;
}

export function sendToken(token, user, statusCode, res) {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIES_EXPIRES * 24 * 60 * 60 * 1000
    ),
    //prevent cross-site attacks
    // cookie can't be mofified/ deleted or any other action
    httpOnly: true,
  };
  if (process.env.NODE_ENV == 'production') {
    cookieOptions.secure = true;
  }
  //REMOVE pass from response obj
  user.password = undefined;
  res.cookie('jwt', token, cookieOptions);
  res.status(statusCode).json({
    status: 'success',
    token,
    user,
  });
}

// priceDiscount: {
//   type: Number,
//   validate: {
//     // validator gets applied on NEW doc creation
//     validator: function (valueInput) {
//       return valueInput < this.price;
//     },
//     message:
//       'Please, discount price ({VALUE}) must be lower than regular price',
//   },
// },
// petSchema.virtual('totalDiscount').get(function () {
//   return this.price * this.priceDiscount;
// });
