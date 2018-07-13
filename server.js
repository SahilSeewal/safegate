// Require Modules
const path       = require('path');
const express    = require('express');
const session    = require('express-session');
const mongoose   = require('mongoose');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const flash      = require('connect-flash');
const passport   = require('passport');

// Initialize Express
const app      = express();

// Require Database Configurations
const dbConfig = require('./config/database.js');

// Pass Passport for configuration
require('./config/passport')(passport); 

/**
 * TODO
 * [] https://www.caffeinecoding.com/better-express-routing-for-nodejs/
 * [] AUTHENTICATE ALL ROUTES
 * [] Guests should only be able to access Guest routes
 * [] Residents should only be able to access Resident routes
 * [] Add https://github.com/motdotla/dotenv
 */

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Bind application-level middleware to an instance of the app object
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

// Required for Passport:
app.use(session({ 
  secret: 'thisshoulddefinitelybechanged',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Database
mongoose.connect(dbConfig.url);
mongoose.connection.once('open', dbConfig.open);
mongoose.connection.on('error', dbConfig.error);

// Routes
app.use('/', require('./routes'));

// Server
// https://www.youtube.com/watch?v=XxRuW1pfGTI&t=1s <- Find Similar
const port = process.env.port || 3000; // TODO: configure this to read from $PORT
app.listen(port, () => {
  console.log(`SafeGate server running on http://localhost:${port}/`);
});
