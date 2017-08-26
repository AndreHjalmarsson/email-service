if (process.env.NODE_ENV === 'production') {
  // If in production mode we wanna return the production set of keys
  module.exports = require('./prod');
} else {
  //If not in production mode we return the dev set of keys
  module.exports = require('./dev');
}
