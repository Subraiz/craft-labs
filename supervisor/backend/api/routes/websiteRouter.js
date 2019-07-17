const { checkAuth, checkWebsite } = require("../middleware/");
const websiteController = require("../controllers/websiteController");
const handlebarsController = require("../controllers/handlebarsController");
const Website = require("../../models/websiteModel");
const User = require("../../models/userModel");
const websiteRouter = require("express").Router();

websiteRouter.use(checkAuth);

websiteRouter.get("/:user_id/all", checkWebsite, (req, res) => {
  // Find all of users websites
  Website.find({ userID: req.params.user_id }, function(err, websites) {
    if (err) {
      return res.status(404).send({
        success: false,
        message: "Error: Server Error"
      });
    } else {
      // If user has more than one site redirect to select website page
      if (websites.length > 1) {
        return res.render("selectWebsite", { layout: false, websites });
      } else {
        // Otherwise go to CMS dashboard for website
        res.redirect(`/website/${websites[0]._id}`);
      }
    }
  });
});

websiteRouter.get("/:website_id", (req, res) => {
  Website.findById(req.params.website_id, function(err, website) {
    if (err) {
      res.status(500).json({ error: "Server Error" });
    } else {
      if (err) {
        res.status(500).json({ error: "Server Error" });
      } else {
        User.findById(website.userID, function(err, user) {
          let websiteConfiguration = {
            title: website.title,
            name: website.title,
            type: website.type,
            logo: website.logo,
            email: user.email,
            websiteID: req.params.website_id,
            userID: website.userID,
            dashboard: true
          };
          return res.render("dashboard", {
            ...websiteConfiguration,
            layout: "base"
          });
        });
      }
    }
  });
});

websiteRouter.get("/:website_id/companyinfo", (req, res) => {
  Website.findById(req.params.website_id, function(err, website) {
    if (err) {
      res.status(500).json({ error: "Server Error" });
    } else {
      if (err) {
        res.status(500).json({ error: "Server Error" });
      } else {
        User.findById(website.userID, function(err, user) {
          let websiteConfiguration = {
            title: website.title,
            name: website.title,
            type: website.type,
            logo: website.logo,
            email: user.email,
            websiteID: req.params.website_id,
            userID: website.userID,
            companyInfo: true
          };
          return res.render("companyInformation", {
            ...websiteConfiguration,
            layout: "base"
          });
        });
      }
    }
  });
});

websiteRouter.post("/", (req, res) => {
  let websiteInformation = parseJSON(req.body);
  websiteController.createWebsite(req, res, websiteInformation);
});

function parseJSON(object) {
  return JSON.parse(JSON.stringify(object));
}

module.exports = websiteRouter;
