// Handle all logic for login and authentication of User

const User = require("../../../models/userModel");
const UserSession = require("../../../models/userSessionModel");
const jwt = require("jsonwebtoken");

// Helper function to authenticate user
module.exports.authenticateUser = (req, res, user, password) => {
  if (!user.validPassword(password)) {
    res.status(400).send({ error: "Authentication Failed" });
  } else {
    // Create user session with token
    let userSession = new UserSession();
    userSession.userID = user._id;
    userSession.save((err, session) => {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "Error: Server Error"
        });
      } else {
        // Create token with user ID parameter
        const token = jwt.sign(
          {
            userID: user._id,
            sessionID: userSession._id
          },
          process.env.JWT_KEY
        );

        // Send response back to user with JWT token
        return res.send({
          success: true,
          message: "Success: User Authenticated",
          token: token
        });
      }
    });
  }
};

// Register New User
module.exports.registerUser = (req, res, userInfo) => {
  let newUser = createNewUser(userInfo);
  newUser.save(function(err) {
    if (err) res.json(err);
    return res.status(200).json({
      message: "New user created!",
      data: newUser
    });
  });
};

// Make sure all user fields are valid
module.exports.validUserFields = userInfo => {
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
};

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

let loginController = module.exports;
