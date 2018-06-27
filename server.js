// Require Modules
const path       = require('path');
const express    = require('express');
const session    = require('express-session');
const mongoose   = require('mongoose');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const passport   = require('passport');
const flash      = require('connect-flash');

// Initialize Express
const app      = express();

// Require Database Configurations
const dbConfig = require('./config/database.js');

/**
 * TODO
 * [] https://www.caffeinecoding.com/better-express-routing-for-nodejs/
 * [] Create RESIDENT MODEL
 * [] Create Resident local strategy in config/passport
 */

require('./config/passport')(passport); // pass passport for configuration

// Bind application-level middleware to an instance of the app object
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

// Configure reserved names in the app settings table
// https://expressjs.com/en/4x/api.html#app.set
app.set('view engine', 'ejs');

// Database
mongoose.connect(dbConfig.url);
mongoose.connection.once('open', dbConfig.open);
mongoose.connection.on('error', dbConfig.error);

// Required for Passport:
app.use(session({ 
  secret: 'thisshoulddefinitelybechanged',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routes
app.use('/', require('./routes'));

// Server
// https://www.youtube.com/watch?v=XxRuW1pfGTI&t=1s <- Find Similar
const port = process.env.port || 3000; // TODO: configure this to read from $PORT
app.listen(port, () => {
  console.log(`SafeGate server running on http://localhost:${port}/`);
});
