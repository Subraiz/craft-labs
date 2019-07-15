const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token =
      req.cookies.token === undefined
        ? req.get("authorization").split(" ")[1]
        : req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next();
  } catch (e) {
    return res.redirect("/login");
  }
};
