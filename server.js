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
const app        = express();

// dotenv
require('dotenv').config({path: path.join(__dirname, ".env")});

// Pass Passport for configuration
require('./config/passport')(passport); 

/**
 * TODO
 * [] https://www.caffeinecoding.com/better-express-routing-for-nodejs/
 * [] https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04
 * [] https://hackernoon.com/continuous-deployment-for-node-js-on-digitalocean-d800e8520ffe
 * [x] Continue to authenticate routes
 * [] Set up form validation with express-validator
 * [] Set up password reset functionality
 * [x] Add https://github.com/motdotla/dotenv
 * [] Add as much database dependent functionality as possible
 * [] Deploy to safegate.mjvolk.com 
 * [] Set up continuous deployment
 * [] Set up continuous integration
 * [] Set up validation so user cannot submit form without all fields entered
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
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

mongoose.connect(process.env.MONGO_URI)
  .then(connection => {
      console.log(`Connected to MongoDB on port ${mongoose.connection.port}`)
  })
  .catch(error => {
    console.log(error.message)
  });

// Routes
app.use('/', require('./routes'));

// Server
// https://www.youtube.com/watch?v=XxRuW1pfGTI&t=1s <- Find Similar
const port = process.env.port || 3000; // TODO: configure this to read from $PORT
app.listen(port, () => {
  console.log(`SafeGate server running on http://localhost:${port}/`);
});
