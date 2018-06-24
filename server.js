// Require Modules
const path     = require('path');
const express  = require('express')
const mongoose = require('mongoose');

// Initialize Express
const app      = express();

// Require Database Configurations
const dbConfig = require('./config/database.js');

/**
 * TODO
 * [] Install passport
 * [] Install passport-local
 * [] http://www.passportjs.org/docs/configure/
 * [] http://www.passportjs.org/docs/username-password/
 * [] Test new LocalStrategy with plaintext password
 * [] Store password in database
 * [] Drop database
 * [] Install bcrypt-nodejs
 * [] https://www.caffeinecoding.com/better-express-routing-for-nodejs/
 */

// Bind application-level middleware to an instance of the app object
app.use('/', require('./routes'));
app.use('/static', express.static(path.join(__dirname, 'public')));

// Configure reserved names in the app settings table
// https://expressjs.com/en/4x/api.html#app.set
app.set('view engine', 'ejs');

// Database
mongoose.connect(dbConfig.url);
mongoose.connection.once('open', dbConfig.open);
mongoose.connection.on('error', dbConfig.error);

// Server
// https://www.youtube.com/watch?v=XxRuW1pfGTI&t=1s <- Find Similar
const port = process.env.port || 3000; // TODO: configure this to read from $PORT
app.listen(port, () => {
  console.log(`SafeGate server running on http://localhost:${port}/`);
});
