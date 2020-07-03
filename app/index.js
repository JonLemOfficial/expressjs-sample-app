"use strict";

const express = require('express');
const path = require("path");

// default constants
const PORT = process.env.PORT || process.argv[2] || 8000;
const ROOT_DIR = path.join(__dirname, "..", "public");

// web routes
const routes = require("./routes");

const app = express();

app
  // enable main public directory for user requests
  .use(express.static(path.join( __dirname, "..", "public" )))

  // enable template engine for rendering views on requests paths
  .set("view engine", "ejs")

  // paths
  .get("/", routes.home)
  .get("/data", routes.data)
  
  .get("/login", routes.login.GET)
  .get("/register", routes.register.GET)
  // .post("/login", routes.login.post)
  // .post("/register", routes.register.post)

  // set 404 error pages for undefined routes  
  .get("*", function(req, res) {
    res
      .status(404)
      .sendFile(path.join(ROOT_DIR, "404.html"));
    console.log(res.dns);
    
  })


  // enable port and start serving
  .listen(PORT, () => {
    console.log(`Server running at: "http://localhost:${ PORT }"`)
  });