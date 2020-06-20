"use strict";

const locales = require('../locales/es_ES');

function login(req, res) {
  res.render('login', locales);
}

module.exports = login;