"use strict";

const doc = require("../locales/es_ES");
const server = require("./_server");

function home(req, res) {
  res
    .status(200)
    .render("index", Object.assign({}, {t: doc.t}, {s: server}));
}

module.exports = home;