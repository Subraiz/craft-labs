// Handle routing for user on the CMS

const express = require("express");
var cookieParser = require("cookie-parser");
const { checkAuth, checkUserWebsites } = require("../../middleware/");
const userRouter = express.Router();

userRouter.use(cookieParser());

userRouter.get("/", checkAuth, checkUserWebsites, (req, res) => {
  return res.status(200).redirect(`/cms/${req.userData.userID}/all`);
});

userRouter.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.redirect("/");
});

module.exports = userRouter;
