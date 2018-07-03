const express = require('express');

function index(req, res) {
  res.render('pages/index')
}

function amILoggedIn(req, res) {
  if (req.user) {
    res.send('Logged in!');
  } else {
    res.send('NOT Logged in!');
  }
}

module.exports = {
  index: index,
  amILoggedIn: amILoggedIn
}
