/**
 * config/database
 * This file contains the URL, port, and database name of the 
 * database that the application is currently connected to. It creates an
 * exports object that is required in the main server.js to initialize the database.
 */

const mongoose = require('mongoose');
const url = "mongodb://safegate:safegate@127.0.0.1:27017/safegate";

const open = function open() {
  console.log(`Connected to MongoDB on port ${mongoose.connection.port}`);
}

const error = function error(err) {
  console.log(err);
}

module.exports = {
  url: url,
  open: open,
  error: error,
}
