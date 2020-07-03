"use strict";

const doc = require("../locales/es_ES");

function GET(req, res) {
  res
    .status(200)
    .render("login", doc)
}

module.exports = {
  GET
};