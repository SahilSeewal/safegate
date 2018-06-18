// Init
const express = require('express');
const mongoose = require('mongoose');
const configDB = require('./config/database.js');

const app = express();

// https://scotch.io/tutorials/easy-node-authentication-setup-and-local 
// The main reason why I chose this over something like MSSQL or MySQL 
// is the flexibility you obtain when using it. No rigid schema. If three 
// months down the line you need a certain table to have an extra field, 
// and this and that, you just change it and it ripples out from there on out.

// Database
mongoose.connect(configDB.url);
let db = mongoose.connection;

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
app.listen(3000, () => console.log('Example app listening on port 3000!'));
