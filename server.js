const { db } = require('./utils/tools');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('Uncaught exception, shutting down..');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');
db();

const server = app.listen(process.env.PORT, () => {
  console.log(`App running in port:${process.env.PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection, shutting down..');
  console.log(err.name, err.message);
  console.log(err);
  server.close(() => process.exit(1));
});
