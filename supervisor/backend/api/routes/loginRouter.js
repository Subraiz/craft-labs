const jwt = require("jsonwebtoken");
const loginController = require("../controllers/loginController");
const User = require("../../models/userModel");
const Website = require("../../models/websiteModel");
const loginRouter = require("express").Router();

// Initial login page
loginRouter.get("/", (req, res) => {
  // Check if cookie or auth header exists, if it doesn't redirect to login page - otherwise load user website
  try {
    const token =
      req.cookies.token === undefined
        ? req.get("authorization").split(" ")[1]
        : req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    // Retreive list of websites that matches User's ID and redirect to CMS Dashboard
    Website.find({ userID: decoded.userID }, function(err, websites) {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "Error: Server Error"
        });
      } else {
        let website = websites[0];
        return res.redirect(`/website/${decoded.userID}/all`);
      }
    });
  } catch (e) {
    // Render initial login screen if user is not logged in
    return res.render("login", { layout: false });
  }
});

// Handle authentication and redirect user to their CMS
loginRouter.post("/", (req, res) => {
  let { email, password } = parseJSON(req.body);

  // Locate the user in the database by searching with email
  User.find({ email: email }, function(err, users) {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Error: Server Error"
      });
    } else if (users.length < 1) {
      return res.status(401).json({
        error: "Authentication failed"
      });
    } else {
      // Authenticate the user
      loginController.authenticateUser(req, res, users[0], password);
    }
  });
});

// Create user to store in database
loginRouter.post("/register", (req, res) => {
  const userInfo = parseJSON(req.body);

  // Check if all required fields are set
  if (!loginController.validUserFields(userInfo)) {
    return res.status(400).send({
      success: false,
      message:
        "Please include first name, last name, email, password, and phone."
    });
  } else {
    // Check if user already exists in database
    User.find({ email: userInfo.email }, function(err, users) {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "Error: Server Error"
        });
      } else if (users.length > 0) {
        res.status(400).send({
          success: false,
          message: "User already exists"
        });
      } else {
        // Create new user and save user to database
        loginController.registerUser(req, res, userInfo);
      }
    });
  }
});

// Parse incoming JSON object
function parseJSON(object) {
  return JSON.parse(JSON.stringify(object));
}

module.exports = loginRouter;
