const User = require("../../models/userModel");
const Website = require("../../models/websiteModel");
const path = require("path");

module.exports = (req, res, next) => {
  var appDir = path.dirname(require.main.filename);
  console.log(appDir);
  Website.find({ userID: req.userData.userID }, function(err, websites) {
    if (err) {
      return res.status(500).send({ error: "Server Error" });
    } else if (!websites || websites == undefined || websites.length < 1) {
      res.clearCookie("token");
      return res.status(404).sendFile("./error/websiteNotFound.html", {
        root: appDir
      });
    } else {
      next();
    }
  });
};
