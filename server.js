const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose.connect(process.env.DB).then((el) => {
  // console.log(el.connections);
  console.log('DB connected');
});

app.listen(process.env.PORT, () => {
  console.log(`App running in port:${process.env.PORT}`);
});
