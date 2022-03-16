const express = require('express');
const morgan = require('morgan');
// reqs/ip on a given time
const rateLimit = require('express-rate-limit');
//ROUTERS
const petRouter = require('./Routes/pets');
const userRouter = require('./Routes/user');

const app = express();

//GLOBAL MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Plase come back later',
});
app.use('/api', limiter);

app.use(express.json());
app.use('/api/v1/pets', petRouter);
app.use('/api/v1/user', userRouter);

module.exports = app;
