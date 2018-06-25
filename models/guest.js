const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  accessGranted: [{location: String, expires: Date}]
});

const Guest = mongoose.model('Guest', GuestSchema);

module.exports = Guest;
