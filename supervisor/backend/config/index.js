const express = require("express");
const exphbs = require("express-handlebars");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const { loginRouter, websiteRouter, userRouter } = require("../api/routes");
const { websiteType } = require("./helpers");

// App server settings
module.exports.appConfig = (app, directory) => {
  const hbs = exphbs.create({
    defaultLayout: "main",
    helpers: {
      websiteType: websiteType
    }
  });

  app.enable("view cache");
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(directory); // Set directory to public so handlebars can access js/css directory
  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");
  return app;
};

// Establish connection to dev or production database
module.exports.dbConfig = db => {
  mongoose.connect(
    `mongodb://admin:password@${process.env.HOST}:27017/${process.env.DB}`,
    { useNewUrlParser: true }
  );
  var db = mongoose.connection;
  if (!db)
    console.log(`Error connecting ${process.env.DB.toUpperCase()} database.`);
  else console.log(`Connected to ${process.env.DB.toUpperCase()} database.`);
};

// Set up application routes
module.exports.routesConfig = app => {
  app.use("/", userRouter);
  app.use("/login", loginRouter);
  app.use("/website", websiteRouter);
};
