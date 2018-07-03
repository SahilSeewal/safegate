const express = require('express');
const passport = require('passport');
const Guest = require('../../models/guest');

function index(req, res) {
  res.render('pages/guest/dashboard', { guestSignupMessage: req.flash('guestSignupSuccessMessage') });
}

function getSignup(req, res) {
  /**
   * TODO
   * Change how this message renders in views/pages/guest/signup
   * Currently, I am just handling the message from the EJS file
   */
  res.render('pages/guest/signup', { guestSignupMessage: req.flash('guestSignupFailureMessage') })
}

function postSignup(req, res, next) {
  passport.authenticate('local-guest-signup', {
    successRedirect : '/guest/', // redirect to guest dashboard
    failureRedirect : '/guest/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  })(req, res, next) // immediately invoke passport.authenticate
}

function getLogin(req, res) {
  res.render('pages/guest/login')
}

/**
 * TODO
 * Making a request to /guest/login does not allow
 * me to log in whether or not I have successfully registered. 
 * It has to be the way I'm passing this function.
 */

function postLogin(req, res) {
  res.send(req.body.email);
}

function getLogout(req, res) {
  req.logout();
  res.redirect('/');
}

module.exports = {
  index: index,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogin: getLogin,
  postLogin: postLogin,
  getLogout: getLogout
}
