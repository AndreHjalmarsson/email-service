const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost/emaily-dev');
mongoose.connection.on('error', error =>
  console.log(`DB connection falied: ${error.message}`)
);

app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
