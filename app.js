const express = require('express');
const morgan = require('morgan');
//ROUTERS
const tourRouter = require('./Routes/tours');
const userRouter = require('./Routes/user');

const app = express();

//MIDDLEWARES
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}
app.use(express.json())

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/tours', userRouter)


module.exports = app;