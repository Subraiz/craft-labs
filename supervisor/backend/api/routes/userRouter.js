const express = require("express");
var cookieParser = require("cookie-parser");
const checkAuth = require("../middleware/checkAuth");
const checkWebsite = require("../middleware/checkWebsite");
const Website = require("../../models/websiteModel");
const userRouter = express.Router();

userRouter.use(cookieParser());

userRouter.get("/", checkAuth, checkWebsite, (req, res) => {
  return res.status(200).redirect(`/website/${req.userData.userID}`);
});

module.exports = userRouter;
