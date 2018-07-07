const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');
const Schema   = mongoose.Schema;

const GuestSchema = new Schema({
  local: {
    email: String,
    password: String,
  },
  firstName: String,
  lastName: String,
  userGroup: String,
});

// Generate hash for passwords
GuestSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Check if login password is valid
GuestSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

const Guest = mongoose.model('Guest', GuestSchema);

module.exports = Guest;
