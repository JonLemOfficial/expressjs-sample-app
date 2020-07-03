"use strict";

const doc = require("../locales/es_ES");

function home(req, res) {
  res
    .status(200)
    .render("index", doc)
}

module.exports = home;