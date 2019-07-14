const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");
const UserSession = require("../../models/userSessionModel");
const loginRouter = express.Router();
require("dotenv").config();

// Initial login page
loginRouter.get("/", (req, res, next) => {
  res.render("login", { layouts: false });
});

// Handle authentication and redirect user to their CMS
loginRouter.post("/", (req, res, next) => {
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
      let user = users[0];
      if (!user.validPassword(password)) {
        res.status(400).send({ error: "Authentication Failed" });
      } else {
        // Create user session with token
        let userSession = new UserSession();
        userSession.userID = user._id;
        userSession.save(err, session => {
          if (err) {
            return res.status(500).send({
              success: false,
              message: "Error: Server Error"
            });
          } else {
            // Create token with user ID parameter
            const token = jwt.sign(
              { userID: user._id, sessionID: userSession._id },
              process.env.JWT_KEY
            );
            return res.send({
              success: true,
              message: "Success: User Authenticated",
              token: token
            });
          }
        });
      }
    }
  });

  // Check if the password provided matches the users Password

  // Redirect user to their CMS

  // if (email.toLowerCase() === "admin" && password === "password") {
  //   res.status(200).json({ res: req.body });
  // } else {
  //   res.status(400).send({ error: "authentication failed" });
  // }
});

// Create user to store in database
loginRouter.post("/register", (req, res, next) => {
  const userInfo = parseJSON(req.body);

  // Check if all required fields are set
  if (!validUserFields(userInfo)) {
    return res.status(400).send({
      success: false,
      message:
        "Please include first name, last name, email, password, and phone."
    });
  } else {
    // Check if user already exists
    User.find({ email: userInfo.email }, function(err, users) {
      if (err) {
        console.log(err);
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
        let newUser = createNewUser(userInfo);
        newUser.save(function(err) {
          if (err) res.json(err);
          return res.status(200).json({
            message: "New user created!",
            data: newUser
          });
        });
      }
    });
  }
});

/******************** Helper Funcitons ********************/

// Parse incoming JSON object
function parseJSON(object) {
  return JSON.parse(JSON.stringify(object));
}

// Make sure all required fields are not empty
function validUserFields(userInfo) {
  const { firstName, lastName, email, password, phone } = userInfo;
  // Return true if all required fields are filled in
  return !(
    firstName === undefined ||
    firstName === "" ||
    (lastName === undefined || lastName === "") ||
    (email === undefined || email === "") ||
    (password === undefined || password === "") ||
    (phone === undefined || phone === "")
  );
}

// Create new user
function createNewUser(userInfo) {
  let { firstName, lastName, email, password, phone } = userInfo;
  let user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email.toLowerCase();
  user.password = user.generateHash(password);
  user.phone = phone;
  return user;
}

module.exports = loginRouter;
