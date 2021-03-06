const express = require('express');

function index(req, res) {
  res.render('pages/index', { 
    // Available View Template Variables
    userExists: req.user, 
    doNotAllowSignUp: req.flash('doNotAllowSignUp') 
  });
}

function amILoggedIn(req, res) {
  if (req.user) {
    res.json(req.user);
  } else {
    res.send('NOT Logged in!');
  }
}

function getLogout(req, res) {
  req.session.destroy(function (err) {
    res.clearCookie('connect.sid');
    res.redirect('/'); 
  });
}

module.exports = {
  index: index,
  amILoggedIn: amILoggedIn,
  getLogout: getLogout
}
