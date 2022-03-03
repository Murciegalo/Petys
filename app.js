const express = require('express');


const app = express();

app.use('/', (req, res) => {
  return res.status(200).send('Server tested and running bro');
})

app.listen( 4500, () => {
  console.log('App running in port:4500');
})