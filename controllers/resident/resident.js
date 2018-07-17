const express = require('express');
const passport = require('passport');
const Resident = require('../../models/resident');

// Resident Index (Dashboard) Controller
function index(req, res) {
  res.render('pages/resident/dashboard', { 
    residentSignupMessage: req.flash('residentSignupSuccessMessage'),
    residentEmail: req.user.localStrategy.email,
    residentFirstName: req.user.firstName,
    residentLastName: req.user.lastName,
    residentAddressLineOne: req.user.address.lineOne,
    residentAddressLineTwo: req.user.address.lineTwo,
    residentCity: req.user.address.city,
    residentState: req.user.address.state,
    residentZipCode: req.user.address.zip,
  });
}

// GET Resident Registration Page
function getSignup(req, res) {
  res.render('pages/resident/signup', {
    residentSignupMessage: req.flash('residentSignupFailureMessage'),
  });
}

// Handle Resident Registration POST Request
function postSignup(req, res, next) {
  passport.authenticate('local-resident-signup', {
    successRedirect : '/resident/',
    failureRedirect : '/resident/signup',
    failureFlash : true
  })(req, res, next)
}

// GET Resident Login Page
function getLogin(req, res) {
  res.render('pages/resident/login', { 
    noResidentEmailFoundOnLogin: req.flash('noResidentEmailFoundOnLogin'),
    incorrectResidentPassword: req.flash('incorrectResidentPassword')
  });
}

// Handle resident Login POST Request
function postLogin(req, res, next) {
  passport.authenticate('local-resident-login', {
    successRedirect: '/resident/',
    failureRedirect: '/resident/login',
    failureFlash: true
  })(req, res, next);
}

function getUser(req, res) {
  res.send(req.user);
}

// Export Resident Controllers
module.exports = {
  index: index,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogin: getLogin,
  postLogin: postLogin,
  getUser: getUser
}
