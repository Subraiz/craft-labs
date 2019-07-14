const express = require("express");
const exphbs = require("express-handlebars");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const websiteRouter = require("./api/routes/websiteController");
const userRouter = require("./api/routes/userController");
const loginRouter = require("./api/routes/loginController");

// Set up express server
const app = express();

// Set up default app settings for mongodb and handlebars
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
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
  "mongodb://localhost/admin",
  { useNewUrlParser: true }
);
var db = mongoose.connection;
if (!db) console.log("Error connecting db");
else console.log("Connected to database");

// Set up app routes
app.use("/login", loginRouter);
app.use("/website", websiteRouter);

module.exports = app;
