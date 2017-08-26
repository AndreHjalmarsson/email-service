const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/UserModel');
const keys = require('./config/keys');
const routes = require('./routes');

mongoose.connect(keys.mongoUri);
mongoose.connection.on('error', error =>
  console.log(`DB connection falied: ${error.message}`)
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
const server = app.listen(PORT, () => {
  console.log(`Server running on port -> ${server.address().port}`);
});
