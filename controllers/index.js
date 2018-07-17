const express = require('express');

function index(req, res) {
  res.render('pages/index')
}

function amILoggedIn(req, res) {
  if (req.user) {
    res.json(req.user);
  } else {
    res.send('NOT Logged in!');
  }
}

module.exports = {
  index: index,
  amILoggedIn: amILoggedIn
}
