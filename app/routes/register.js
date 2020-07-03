"use strict";

const doc = require("../locales/es_ES");
const server = require("./_server");

function GET(req, res) {
  res
    .status(200)
    .render("login", Object.assign({}, {t: doc.t}, {s: server}));
}

module.exports = {
  GET
};