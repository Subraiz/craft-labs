const express = require("express");
const checkAuth = require("../middleware/checkAuth");
const Website = require("../../models/websiteModel");
const User = require("../../models/userModel");
const websiteRouter = express.Router();

websiteRouter.use(checkAuth);

websiteRouter.get("/:website_id", (req, res) => {
  Website.findById(req.params.website_id, function(err, website) {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Error: Website not found"
      });
    } else {
      User.findById(req.params.website_id, function(err, user) {
        let websiteConfiguration = {
          title: website.title,
          name: website.title,
          type: website.type,
          logo: website.logo,
          email: user.email,
          websiteID: req.params.website_id
        };
        return res.render("dashboard", {
          ...websiteConfiguration,
          layout: "base"
        });
      });
    }
  });
});

websiteRouter.post("/", (req, res) => {
  let {
    userID,
    type,
    domain,
    features,
    pages,
    planType,
    logo,
    title
  } = parseJSON(req.body);
  let website = new Website();

  website._id = userID;
  website.domain = domain;
  website.features = features;
  website.logo = logo;
  website.pages = pages;
  website.planType = planType;
  website.title = title;
  website.type = type;
  website.visitors = [{ ip: "127.0.0.1" }];

  // Save the website and check for errors
  website.save(function(err) {
    if (err) res.json(err);
    res.json({
      message: "New website created!",
      data: website
    });
  });
});

function parseJSON(object) {
  return JSON.parse(JSON.stringify(object));
}

module.exports = websiteRouter;
