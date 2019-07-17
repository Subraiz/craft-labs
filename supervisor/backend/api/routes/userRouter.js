const express = require("express");
var cookieParser = require("cookie-parser");
const { checkAuth, checkWebsite } = require("../middleware/");
const Website = require("../../models/websiteModel");
const userRouter = express.Router();

userRouter.use(cookieParser());

userRouter.get("/", checkAuth, checkWebsite, (req, res) => {
  return res.status(200).redirect(`/website/${req.userData.userID}/all`);
});

userRouter.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.redirect("/");
});

module.exports = userRouter;
