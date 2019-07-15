const express = require("express");
let app = express();

// Set up default app settings - and set public directory
app = require("./config").appConfig(app, express.static(__dirname + "/public"));

// Configure and connect to mongodb
require("./config").dbConfig();

// Set up app router
require("./config").routesConfig(app);

module.exports = app;
