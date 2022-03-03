const express = require('express');
const morgan = require('morgan');
//ROUTERS
const tourRouter = require('./Routes/Tours');
const userRouter = require('./Routes/User');

const app = express();

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/tours', userRouter)


app.listen( 4500, () => {
  console.log('App running in port:4500');
})