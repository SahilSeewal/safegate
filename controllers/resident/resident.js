const express = require('express');

function index(req, res) {
  res.send('Resident Dashboard')
}

function signup(req, res) {
  res.render('pages/resident/signup')
}

function register(req, res) {
  console.log(req.body)
  res.json(req.body)
}

module.exports = {
  index: index,
  signup: signup,
  register: register
}
