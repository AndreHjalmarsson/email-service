const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/UserModel');
const keys = require('./config/keys');
const routes = require('./routes');

mongoose.connect(keys.mongoURI);
mongoose.connection.on('error', error =>
  console.log(`Db connection falied: ${error.message}`)
);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
