const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const cors = require("cors");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const userRouter = require("./api/routes/userRouter");
const websiteRouter = require("./api/routes/websiteRouter");
const loginRouter = require("./api/routes/loginRouter");
require("dotenv").config();

// Set up express server
const app = express();
let test = "test";

// Set up default app settings for mongodb and handlebars
app.use(cors());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.get("/", (req, res) => {
//   res.render("login", {
//     layouts: false
//   });
// });
//
// app.get("/website/:websiteID", (req, res) => {
//   const website = req.params.websiteID;
//   res.render("home");
// });

// Connect to mongodb
mongoose.connect(
  `mongodb://admin:password@${process.env.HOST}:27017/${process.env.DB}`,
  { useNewUrlParser: true }
);
var db = mongoose.connection;
if (!db) console.log("Error connecting db");
else console.log("Connected to database");

// Set up app router
app.use("/", userRouter);
app.use("/login", loginRouter);
app.use("/website", websiteRouter);

module.exports = app;
