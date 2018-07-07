const express = require('express');
const passport = require('passport');
const Guest = require('../../models/guest');

// Guest Index (Dashboard) Controller
function index(req, res) {
  res.render('pages/guest/dashboard', { 
    guestSignupMessage: req.flash('guestSignupSuccessMessage'),
  });
}

// GET Guest Registration Page
function getSignup(req, res) {
  res.render('pages/guest/signup', { 
    guestSignupMessage: req.flash('guestSignupFailureMessage'),
  });
}

// Handle Guest Registration POST Request
function postSignup(req, res, next) {
  passport.authenticate('local-guest-signup', {
    successRedirect : '/guest/',
    failureRedirect : '/guest/signup',
    failureFlash : true
  })(req, res, next) // immediately invoke passport.authenticate
}

// GET Guest Login Page
function getLogin(req, res) {
  res.render('pages/guest/login', { 
    noGuestEmailFoundOnLogin: req.flash('noGuestEmailFoundOnLogin'),
    incorrectGuestPassword: req.flash('incorrectGuestPassword')
  });
}

// Handle Guest Login POST Request
function postLogin(req, res, next) {
  passport.authenticate('local-guest-login', {
    successRedirect: '/guest/',
    failureRedirect: '/guest/login',
    failureFlash: true
  })(req, res, next);
}

// Hit this endpoint to log out current guest
function getLogout(req, res) {
  req.logout();
  res.redirect('/');
}

function getUser(req, res) {
  res.send(req.user);
}

/** 
 * Route Authentication Middleware
 * This function should be used to protect all private Guest routes
 * from users who are not logged in as a guest. I need to learn more
 * about redirects before finishing this.
 */
function authenticateLocalGuest(req, res, next) {
  if (!req.user)
    res.redirect('/')
  if (req.user.userGroup !== "Guest")
    res.redirect('back')
  if (req.user.userGroup === "Guest")
    next();
}

// Export Controllers
module.exports = {
  index: index,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogin: getLogin,
  postLogin: postLogin,
  getLogout: getLogout,
  getUser: getUser,
}
