const express = require('express');

function index(req, res) {
  res.send('Guest Dashboard')
}

function getSignup(req, res) {
  res.render('pages/guest/signup')
}

function postSignup(req, res) {
  console.log(req.body)
  res.json(req.body)
}

module.exports = {
  index: index,
  getSignup: getSignup,
  postSignup: postSignup
}
