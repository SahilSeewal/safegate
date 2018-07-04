const express = require('express');
const passport = require('passport');
const Guest = require('../../models/guest');

// Guest Index (Dashboard) Controller
function index(req, res) {
  res.render('pages/guest/dashboard', { guestSignupMessage: req.flash('guestSignupSuccessMessage') });
}

// GET Guest Registration Page
function getSignup(req, res) {
  res.render('pages/guest/signup', { guestSignupMessage: req.flash('guestSignupFailureMessage') })
}

// Handle Guest Registration POST Request
function postSignup(req, res, next) {
  passport.authenticate('local-guest-signup', {
    successRedirect : '/guest/', // redirect to guest dashboard
    failureRedirect : '/guest/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  })(req, res, next) // immediately invoke passport.authenticate
}

// GET Guest Login Page
function getLogin(req, res) {
  res.render('pages/guest/login')
}

/**
 * TODO
 * Making a request to /guest/login does not allow
 * me to log in whether or not I have successfully registered. 
 * It has to be the way I'm passing this function.
 */

// Handle Guest Login POST Request
function postLogin(req, res) {
  res.send(req.body.email);
}

// Hit this endpoint to log out current guest
function getLogout(req, res) {
  req.logout();
  res.redirect('/');
}

// Export Controllers
module.exports = {
  index: index,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogin: getLogin,
  postLogin: postLogin,
  getLogout: getLogout
}
