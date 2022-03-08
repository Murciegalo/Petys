const express = require('express');
const morgan = require('morgan');
//ROUTERS
const petRouter = require('./Routes/Pets');
const userRouter = require('./Routes/user');

const app = express();

//MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use('/api/v1/pets', petRouter);
app.use('/api/v1/user', userRouter);

module.exports = app;
