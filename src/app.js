"use strict";

const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || process.argv[2] || 8080;
const app = express();

var routes = require('./routes');

app
  .use(express.static(path.join(__dirname, "../public")))
  .set('view engine', "ejs")

  .get('/', routes.home)
  .get('/login', routes.login)

  // init server
  .listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`)
  });
