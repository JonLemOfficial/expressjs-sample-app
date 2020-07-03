"use strict";

const doc = require("../locales/es_ES");

function data(req, res) {
  Object.assign(doc, { req, res })
  res
    .status(200)
    .render("data", doc)
}

module.exports = data;