const express = require('express');

function index(req, res) {
  res.send('Guest Dashboard')
}

function signup(req, res) {
  res.render('pages/guest/signup')
}

function register(req, res) {
  console.log(req.body.firstName)
  res.send('Guest Registered!')
}

module.exports = {
  index: index,
  signup: signup,
  register: register
}