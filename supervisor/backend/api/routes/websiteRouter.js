const express = require("express");
const checkAuth = require("../middleware/checkAuth");
const Website = require("../../models/websiteModel");
const websiteRouter = express.Router();

websiteRouter.use(checkAuth);

websiteRouter.get("/", (req, res) => {
  let webInfo = {
    title: "Eagle's Deli CMS",
    name: "Eagle's Deli",
    type: "Restaraunt"
  };
  return res.render("dashboard", { ...webInfo, layout: "base" });
});

websiteRouter.get("/:website_id", (req, res) => {
  Website.findById(req.params.website_id, function(err, website) {
    if (err) res.send(err);
    res.json({
      message: "Website details loading...", // change to ...
      data: website
    });
  });
});

websiteRouter.post("/", (req, res) => {
  let website = new Website();
  website.userID = 4554234;
  website.config = {
    category: "test",
    information: {
      title: "subraiz dev"
    }
  };

  // Save the website and check for errors
  website.save(function(err) {
    if (err) res.json(err);
    res.json({
      message: "New website created!",
      data: website
    });
  });
});

module.exports = websiteRouter;
