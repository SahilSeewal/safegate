const express = require('express');

function index(req, res) {
  res.render('pages/index')
}

module.exports = {
  index: index
}
