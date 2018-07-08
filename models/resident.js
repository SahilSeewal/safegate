const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');
const Schema   = mongoose.Schema;

const ResidentSchema = new Schema({
  localStrategy: {
    email: String,
    password: String,
  },
  firstName: String,
  lastName: String,
  address: {
    lineOne: String,
    lineTwo: String,
    city: String,
    state: String,
    zip: String,
  },
  userGroup: String,
});

// Generate hash for passwords
ResidentSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Check if login password is valid
ResidentSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.localStrategy.password);
};

const Resident = mongoose.model('Resident', GuestSchema);
module.exports = Resident;
