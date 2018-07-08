const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');
const Schema   = mongoose.Schema;

const ResidentSchema = new Schema({});

const Resident = mongoose.model('Resident', GuestSchema);
module.exports = Resident;
