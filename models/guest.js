const mongoose = require('mongoose');

/** 
 * Residential Guest Schema:
 * 
 * First Name: String
 * Last Name: String
 * Email: String
 * Password: bcyrpt hash
 * accessGranted: {}
 * 
 */
const GuestSchema = mongoose.Schema({});

const Guest = module.exports = mongoose.model('Guest', GuestSchema);
