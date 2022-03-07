const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const app = require('./app');


app.listen( process.env.PORT, () => {
  console.log(`App running in port:${process.env.PORT}`);
})