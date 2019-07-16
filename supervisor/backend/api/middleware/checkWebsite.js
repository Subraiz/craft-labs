const User = require("../../models/userModel");
const Website = require("../../models/websiteModel");

module.exports = (req, res, next) => {
  Website.findById(req.userData.userID, function(err, website) {
    if (err) {
      return res.status(500).send({ error: "Server Error" });
    } else if (!website || website == undefined) {
      res.clearCookie("token");
      return res
        .status(404)
        .sendFile("websiteNotFound.html", { root: "error" });
    } else {
      next();
    }
  });
};
