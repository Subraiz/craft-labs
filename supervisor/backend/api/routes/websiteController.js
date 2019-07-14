const express = require("express");
const Website = require("../../models/websiteModel");
const websiteRouter = express.Router();

websiteRouter.get("/", (req, res) => {
  return res.render("home");
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
