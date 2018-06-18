// Init
const express  = require('express');
const mongoose = require('mongoose');
const configDB = require('./config/database.js');

// Port
const port = process.env.port || 3000;

// Initialize Express as 'app'
const app = express();

// Database
mongoose.connect(configDB.url);
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', err => {
  console.log(err)
});

// Views 
app.set('view engine', 'ejs');

// Static
app.use('/static', express.static('public'));

// App Controller
app.use(require('./controllers'))

// Server
// https://www.youtube.com/watch?v=XxRuW1pfGTI&t=1s <- Find Similar
app.listen(port, () => console.log(`SafeGate server running on http://localhost:${port}/`)); // http://localhost:3000/
