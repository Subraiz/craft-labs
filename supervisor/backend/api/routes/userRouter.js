const express = require("express");
var cookieParser = require("cookie-parser");
const checkAuth = require("../middleware/checkAuth");
const Website = require("../../models/websiteModel");
const userRouter = express.Router();

userRouter.use(cookieParser());

userRouter.get("/", checkAuth, (req, res) => {
  return res.status(200).redirect(`/website/${req.userData.userID}`);
});

module.exports = userRouter;
