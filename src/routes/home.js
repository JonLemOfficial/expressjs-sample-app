"use strict";

const locales = require('../locales/es_ES');

function home(req, res) {
  res.render('index', locales);
}

module.exports = home;