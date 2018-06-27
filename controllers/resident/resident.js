const express = require('express');

function index(req, res) {
  res.send('Resident Dashboard')
}

function getSignup(req, res) {
  res.render('pages/resident/signup')
}

function postSignup(req, res) {
  console.log(req.body)
  res.json(req.body)
}

function getLogin(req, res) {
  res.render('pages/resident/login')
}

module.exports = {
  index: index,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogin: getLogin,
}
