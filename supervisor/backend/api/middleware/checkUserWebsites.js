const User = require("../../models/userModel");
const Website = require("../../models/websiteModel");

module.exports = (req, res, next) => {
  Website.find({ userID: req.userData.userID }, function(err, websites) {
    if (err) {
      console.log("wtf?");
      return res.status(500).send({ error: "Server Error" });
    } else if (!websites || websites == undefined || websites.length < 1) {
      res.clearCookie("token");
      return res
        .status(404)
        .sendFile("websiteNotFound.html", { root: "error" });
    } else {
      next();
    }
  });
};
