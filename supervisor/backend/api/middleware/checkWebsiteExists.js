const Website = require("../../models/websiteModel");

module.exports = (req, res, next) => {
  Website.findById(req.params.website_id, function(err, website) {
    if (err) {
      return res.status(500).send({ error: "Server Error" });
    } else if (!website || website == undefined || website.length < 1) {
      res.clearCookie("token");
      return res
        .status(404)
        .sendFile("websiteNotFound.html", { root: "error" });
    } else {
      next();
    }
  });
};
