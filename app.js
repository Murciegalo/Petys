const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
//ROUTERS
const petRouter = require('./Routes/pets');
const userRouter = require('./Routes/user');

const app = express();

//GLOBAL MIDDLEWARES
// Security HTTP headers
app.use(helmet());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Limit reqs/ip on a given time
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Plase come back later',
});
app.use('/api', limiter);
// req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization vs NOSQL query injections
app.use(mongoSanitize());
// Data sanitization vs XSS
app.use(xss());
// Prevent parameters pollution
app.use(
  hpp({
    whitelist: ['price', 'supplier'],
  })
);

app.use('/api/v1/pets', petRouter);
app.use('/api/v1/user', userRouter);

module.exports = app;
