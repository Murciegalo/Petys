const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
//ROUTERS
const petRouter = require('./Routes/pets');
const userRouter = require('./Routes/user');
const reviewRouter = require('./Routes/review');
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

// req.body parser
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

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

//TESTing MIDDLEWARE
app.use((req, res, next) => {
  console.log('Cookies', req.cookies);
  console.log('SESSION', req.session);
  next();
});

app.use('/api/v1/pets', petRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/review', reviewRouter);

module.exports = app;
